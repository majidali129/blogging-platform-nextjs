import { PostDetails } from "@/features/feed/components/post/post-details";
import { getPost } from "@/features/feed/queries/get-post";
import React from "react";

type PostDetailsPageProps = {
  params: Promise<{ username: string; postId: string }>;
};

const PostDetailsPage = async ({ params }: PostDetailsPageProps) => {
  const id = (await params).postId;
  const postPromise = getPost(id);

  return <PostDetails postPromise={postPromise} />;
};

export default PostDetailsPage;
