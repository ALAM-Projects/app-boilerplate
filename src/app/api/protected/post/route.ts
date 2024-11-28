import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { validateAccessToken } from "@/lib/validateAccessToken";

export async function GET(req: Request) {
  try {
    const res = await validateAccessToken(req);

    if (res.status === 401) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);

    const userId = searchParams.get("id");

    if (!userId) {
      return NextResponse.json(
        { user: null, error: "User id is required" },
        { status: 400 }
      );
    }

    // get user info from the session
    const posts = await db.post.findMany({
      where: {
        authorId: userId,
      },
    });

    if (!posts) {
      return NextResponse.json(
        { posts: [], error: "Posts not found" },
        { status: 404 }
      );
    }

    // return posts
    return NextResponse.json(
      {
        posts,
        message: "Posts found",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ posts: null, error: error }, { status: 500 });
  }
}
