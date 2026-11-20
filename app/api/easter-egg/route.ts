import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getVisitCount, incrementVisitCount } from "../../utils/visitCounter";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "easter_egg_found";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Enregistre la visite de la page /game (une seule fois par navigateur,
 * grâce à un cookie) et renvoie le nombre de personnes l'ayant trouvée.
 */
export async function POST(request: NextRequest) {
  const alreadyCounted = cookies().has(COOKIE_NAME);

  try {
    const count = alreadyCounted
      ? await getVisitCount()
      : await incrementVisitCount();

    const response = NextResponse.json({ count, alreadyCounted });

    if (!alreadyCounted) {
      const isHttps =
        request.headers.get("x-forwarded-proto") === "https" ||
        request.nextUrl.protocol === "https:";
      response.cookies.set(COOKIE_NAME, "1", {
        maxAge: ONE_YEAR,
        httpOnly: true,
        sameSite: "lax",
        secure: isHttps,
        path: "/",
      });
    }

    return response;
  } catch (error) {
    console.error("Compteur de l'easter egg :", error);
    return NextResponse.json(
      { error: "Compteur indisponible" },
      { status: 500 },
    );
  }
}
