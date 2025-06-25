"use client";

import { SubmitButton } from "@/components/form/submit-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { RefObject, useActionState, useState } from "react";
import { addComment } from "../actions/add-comment";
import { Empty_Action_State } from "@/components/form/to-action-state";
type CreateCommentFormProps = {
  postId: string;
  textAreaRef: RefObject<HTMLTextAreaElement | null>;
};
export const CreateCommentForm = ({
  postId,
  textAreaRef,
}: CreateCommentFormProps) => {
  const [content, setContent] = useState("");
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
        <Textarea
          ref={textAreaRef}
          name="comment"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="!bg-background w-full border-2 placeholder:opacity-70"
          placeholder="Add to the discussion"
          rows={8}
        />

        <div>
          <SubmitButton
            disabled={content.trim() === ""}
            className="w-fit"
            label="Submit"
          />
        </div>
      </form>
    </div>
  );
};
