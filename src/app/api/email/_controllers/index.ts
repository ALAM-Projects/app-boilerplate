import { defaultActions } from "@/actions";
import { NextResponse } from "next/server";

type ResetEmailPayload = {
  email: string;
};

export const sendResetPasswordEmail = async (payload: ResetEmailPayload) => {
  console.log("PAYLOAD", payload);
  console.log("PAYLOAD", payload);
  console.log("PAYLOAD", payload);

  const result = await defaultActions.POST("/email/reset-password", payload);
  if (result) {
    return NextResponse.json(result);
  } else
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
};
