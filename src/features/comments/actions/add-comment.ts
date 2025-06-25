"use server";

import { ActionState, toActionState } from "@/components/form/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { prisma } from "@/lib/prisma";
import { postDetailsPath } from "@/paths";
import { revalidatePath } from "next/cache";

export const addComment = async (
  postId: string,
  _initialState: ActionState,
  formData: FormData
) => {
  const { user } = await getAuthOrRedirect();
  await prisma.comment.create({
    data: {
      content: formData.get("comment") as string,
      // postId: formData.get("postId") as string,
      postId,
      authorId: user?.id,
    },
  });

  revalidatePath(postDetailsPath(user.userName, postId));

  return toActionState("SUCCESS", "");
};
