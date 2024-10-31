import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const checkSession = async () => {
  const session = await getServerSession(authOptions);

  return NextResponse.json(session);
};
