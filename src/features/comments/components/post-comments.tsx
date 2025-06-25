import { CreateCommentForm } from "./create-comment-form";
import { PostCommentHeader } from "./post-comment-header";
import { PostCommentsList } from "./post-comments-list";
import { ExtendedPost } from "@/features/feed/queries/get-all-posts";
import { RefObject } from "react";

type PostCommentsProps = {
  post: ExtendedPost;
  commentRef: RefObject<HTMLDivElement | null>;
};
export const PostComments = ({ post, commentRef }: PostCommentsProps) => {
  return (
    <div className="space-y-7" ref={commentRef}>
      <PostCommentHeader totalComments={post.comments.length} />
      <CreateCommentForm postId={post.id} />
      <PostCommentsList comments={post.comments} />
    </div>
  );
};
