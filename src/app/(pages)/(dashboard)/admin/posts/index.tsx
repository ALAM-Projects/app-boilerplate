"use client";

import { authOnly } from "@/hocs/auth-only";
import { Post } from "@prisma/client";
import { FC } from "react";

type PostsProps = {
  posts: Post[];
};

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <div>I miei post</div>
      {posts?.length ? posts.map((post) => post.title) : "Nessun post"}
    </>
  );
};

export default authOnly({ ChildComponent: Posts, authorizedRoles: [] });
