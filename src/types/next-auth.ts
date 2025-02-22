import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    id: string;
    role: string;
  }
  interface Session {
    accessToken: string;
    user: User & {
      username: string;
      id: string;
      role: string;
    };
    token: {
      username: string;
      id: string;
      role: string;
      accessToken: string;
    };
  }
}
