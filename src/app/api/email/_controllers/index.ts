import { defaultActions } from "@/actions";
import { authOptions } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";

export const sendResetPasswordEmail = async () => {
  const session = await getServerSession(authOptions);

  // const payload = {
  //   userFirstname: session.user.username,
  // };

  const result = await defaultActions.POST("/email/reset-password", {});

  return result;
};
