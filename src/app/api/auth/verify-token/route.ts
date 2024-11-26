"use server";

import { NextResponse } from "next/server";
import { verifyJwtAccessToken } from "@/lib/token";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token } = body;

    const isTokenValid = await verifyJwtAccessToken(token);

    if (!isTokenValid) {
      return NextResponse.json({ error: "Invalid token" });
    }
    // check if user with this email already exists
    return NextResponse.json(
      {
        message: "Token is valid",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
