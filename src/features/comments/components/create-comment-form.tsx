"use client";

import { SubmitButton } from "@/components/form/submit-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useActionState } from "react";
import { addComment } from "../actions/add-comment";
import { Empty_Action_State } from "@/components/form/to-action-state";
type CreateCommentFormProps = {
  postId: string;
};
export const CreateCommentForm = ({ postId }: CreateCommentFormProps) => {
  const [commentState, commentAction] = useActionState(
    addComment.bind(null, postId),
    Empty_Action_State
  );
  console.log("commentState", commentState);

  return (
    <div className="flex items-start gap-1.5">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
      <form action={commentAction} className="w-full space-y-3">
        {/* <input type="hidden" name="postId" value={postId} /> */}
        <Textarea
          name="comment"
          className="!bg-background w-full border-2 placeholder:opacity-70"
          placeholder="Add to the discussion"
          rows={8}
        />

        <div>
          <SubmitButton className="w-fit" label="Submit" />
        </div>
      </form>
    </div>
  );
};
