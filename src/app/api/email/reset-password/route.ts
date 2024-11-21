import { NextResponse } from "next/server";
import ResetPasswordEmail from "../../../../../react-email-starter/emails/reset_password";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email = "alexamara97@gmail.com" } = body;

    const resetPasswordLink = `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/reset-password?token=${{}}`;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Reset your password",
      react: ResetPasswordEmail({
        resetPasswordLink: resetPasswordLink,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
