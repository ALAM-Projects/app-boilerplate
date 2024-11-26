"use server";

import { db } from "@/lib/db";
import { verifyJwtAccessToken } from "@/lib/token";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const accessToken = authHeader && authHeader.split(" ")[1];

    // if (!accessToken || !verifyJwtAccessToken(accessToken)) {
    //   return NextResponse.json(
    //     { user: null, error: "Unauthorized" },
    //     { status: 401 }
    //   );
    // }

    const { searchParams } = new URL(req.url);

    const userId = searchParams.get("id");

    if (!userId) {
      return NextResponse.json(
        { user: null, error: "User id is required" },
        { status: 400 }
      );
    }

    // get user info from the session
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        Post: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { user: null, error: "User not found" },
        { status: 404 }
      );
    }

    if (!user.Post) {
      return NextResponse.json(
        { user: null, error: "No posts found" },
        { status: 404 }
      );
    }

    // return posts
    return NextResponse.json(
      {
        posts: user.Post,
        message: "Posts found",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ user: null, error: error }, { status: 500 });
  }
}
