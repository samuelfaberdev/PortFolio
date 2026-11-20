import "server-only";
import { deriveKey } from "altcha-lib/algorithms/pbkdf2";
import {
  CappedMap,
  create,
  deriveHmacKeySecret,
  randomInt,
} from "altcha-lib/frameworks/nextjs";

/** Durée de validité d'un défi : le visiteur a 10 minutes pour envoyer le formulaire. */
const CHALLENGE_TTL_SECONDS = 10 * 60;

/** Défis déjà utilisés : empêche de réutiliser une même preuve (anti-rejeu). */
const usedChallenges = new CappedMap<string, boolean>({ maxSize: 10_000 });

type Altcha = {
  instance: ReturnType<typeof create>;
  secret: string;
  keySecret: string;
};

let altcha: Promise<Altcha> | null = null;

function getAltcha(): Promise<Altcha> {
  const secret = process.env.ALTCHA_SECRET;
  if (!secret) {
    return Promise.reject(new Error("ALTCHA_SECRET n'est pas défini."));
  }
  altcha ??= (async () => {
    const keySecret = await deriveHmacKeySecret(secret);
    const instance = create({
      createChallengeParameters: () => ({
        algorithm: "PBKDF2/SHA-256",
        cost: 5_000,
        counter: randomInt(10_000, 5_000),
        expiresAt: Math.floor(Date.now() / 1000) + CHALLENGE_TTL_SECONDS,
      }),
      deriveKey,
      hmacSignatureSecret: secret,
      hmacKeySignatureSecret: keySecret,
      store: usedChallenges,
    });
    return { instance, secret, keySecret };
  })();
  return altcha;
}

/** Génère un nouveau défi (route GET /api/altcha/challenge). */
export async function createAltchaChallenge(request: Request) {
  const { instance } = await getAltcha();
  return instance.challengeHandler(request);
}

/** Vérifie la preuve envoyée avec le formulaire. Chaque preuve n'est valable qu'une fois. */
export async function verifyAltchaPayload(payload: unknown): Promise<boolean> {
  const { instance, secret, keySecret } = await getAltcha();
  const result = await instance.verify(
    payload,
    deriveKey,
    secret,
    keySecret,
    usedChallenges,
  );
  return !result.error && Boolean(result.verification?.verified);
}
