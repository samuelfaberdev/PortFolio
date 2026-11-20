import "server-only";
import { promises as fs } from "fs";
import path from "path";

// En production (Docker), DATA_DIR pointe vers un volume persistant.
const DATA_DIR = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "easter-egg-visits.json");

async function readCount(): Promise<number> {
  try {
    const { count } = JSON.parse(await fs.readFile(FILE, "utf8"));
    if (!Number.isInteger(count) || count < 0) {
      throw new Error(`Compteur invalide dans ${FILE}`);
    }
    return count;
  } catch (error) {
    // Fichier absent : personne n'est encore venu.
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return 0;
    // Fichier illisible : on échoue plutôt que de remettre le compteur à zéro.
    throw error;
  }
}

// Les incréments passent l'un après l'autre pour ne perdre aucune visite.
let queue: Promise<unknown> = Promise.resolve();

export function getVisitCount(): Promise<number> {
  return readCount();
}

export function incrementVisitCount(): Promise<number> {
  const run = queue.then(async () => {
    const count = (await readCount()) + 1;
    await fs.mkdir(DATA_DIR, { recursive: true });
    // Écriture atomique : fichier temporaire puis renommage.
    const tmp = `${FILE}.tmp`;
    await fs.writeFile(tmp, JSON.stringify({ count }));
    await fs.rename(tmp, FILE);
    return count;
  });
  queue = run.catch(() => undefined);
  return run;
}
