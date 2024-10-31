import { defaultActions } from "..";

type SignUpPayload = {
  username: string;
  email: string;
  password: string;
};
export const signUp = async (payload: SignUpPayload) => {
  const result = await defaultActions.POST("/auth/sign-up", payload);

  return result;
};
