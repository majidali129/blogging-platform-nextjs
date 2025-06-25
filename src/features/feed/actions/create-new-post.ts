"use server";

import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { prisma } from "@/lib/prisma";

type NewPostType = {
  coverPhoto: string;
  title: string;
  tags: string[];
  content: string;
  readTime: number;
};
export const createPost = async (post: NewPostType) => {
  try {
    console.log("create post called");
    const { user } = await getAuthOrRedirect();
    const newPost = {
      ...post,
      author: {
        connect: {
          id: user.id,
        },
      },
      tags: {
        connect: post.tags.map((tagId) => ({ id: tagId })),
      },
    };

    await prisma.post.create({ data: newPost });
  } catch (error) {
    console.log("Error while creating post:", error);
  }
};
