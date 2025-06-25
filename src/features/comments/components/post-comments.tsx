import { CreateCommentForm } from "./create-comment-form";
import { PostCommentHeader } from "./post-comment-header";
import { PostCommentsList } from "./post-comments-list";
import { ExtendedPost } from "@/features/feed/queries/get-all-posts";
import { RefObject } from "react";

type PostCommentsProps = {
  post: ExtendedPost;
  commentRef: RefObject<HTMLDivElement | null>;
  textAreaRef: RefObject<HTMLTextAreaElement | null>;
};
export const PostComments = ({ post, commentRef, textAreaRef }: PostCommentsProps) => {
  return (
    <div className="space-y-7" ref={commentRef}>
      <PostCommentHeader totalComments={post.comments.length} />
      <CreateCommentForm postId={post.id} textAreaRef={textAreaRef} />
      <PostCommentsList comments={post.comments} />
    </div>
  );
};
