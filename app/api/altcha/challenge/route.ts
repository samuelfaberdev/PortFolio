import { NextResponse } from "next/server";
import { createAltchaChallenge } from "../../../utils/altcha";

export const dynamic = "force-dynamic";

/** Fournit un défi ALTCHA au widget du formulaire de contact. */
export async function GET(request: Request) {
  try {
    return await createAltchaChallenge(request);
  } catch (error) {
    console.error("ALTCHA :", error);
    return NextResponse.json(
      { error: "Protection anti-spam indisponible" },
      { status: 500 },
    );
  }
}
