import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const sendToEmail = process.env.TO_EMAIL;

export async function POST(req: Request, res: Response) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Contact - Samuel Faber <no-reply@samuelfaber.dev>",
      to: [sendToEmail, email],
      subject: subject,
      html: `
        
        <p>Merci pour votre prise de contact, je vous réponds au plus vite !</p>
        <h1>Votre message :</h1>
        <h2>${subject}</h2>
        <p>${message}</p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
