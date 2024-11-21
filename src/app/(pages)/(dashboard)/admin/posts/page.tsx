"use server";

import { get } from "http";
import Posts from ".";
import { getPosts } from "@/app/api/post/_controllers";

const PostsPage = async () => {
  const response = await getPosts();

  return <Posts posts={response?.posts} />;
};

export default PostsPage;
