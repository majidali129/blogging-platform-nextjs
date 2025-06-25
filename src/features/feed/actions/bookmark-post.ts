"use server";

import { toActionState } from "@/components/form/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { prisma } from "@/lib/prisma";
import { postDetailsPath } from "@/paths";
import { revalidatePath } from "next/cache";

export const toggleBookmark = async (postId: string) => {
  const { user } = await getAuthOrRedirect();
  const post = await prisma.post.findUnique({
    where: { id: postId },
    select: {
      bookmarks: {
        where: { id: user.id },
      },
    },
  });

  if (!post) {
    return toActionState("ERROR", "Post no longer exist");
  }

  const isBookmarked = post.bookmarks.length > 0;
  if (isBookmarked) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        bookmarks: {
          disconnect: { id: postId },
        },
      },
    });
  } else {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        bookmarks: {
          connect: { id: postId },
        },
      },
    });
  }
  revalidatePath(postDetailsPath(user.userName, postId));
};
