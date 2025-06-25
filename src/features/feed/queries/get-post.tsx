import { prisma } from "@/lib/prisma";
import { ExtendedPost } from "./get-all-posts";
import { getAuth } from "@/features/auth/queries/get-auth";
import { cache } from "react";

export const getPost = cache(
  async (id: string): Promise<ExtendedPost | null> => {
    const { user } = await getAuth();
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { name: true, userName: true, id: true, profilePhoto: true },
        },
        tags: true,
        bookmarks: {
          where: { id: user?.id },
          select: { id: true, userName: true },
        },
        comments: {
          include: {
            author: {
              select: {
                name: true,
                userName: true,
                id: true,
                profilePhoto: true,
              },
            },
          },
        },
        _count: { select: { bookmarks: true } },
      },
    });

    if (!post) return null;

    const { _count, bookmarks } = post;

    return {
      ...post,
      isBookmarkedByUser: bookmarks.some(
        (bookmark) => bookmark.id === user?.id
      ),
      totalBookmarks: _count.bookmarks,
    };
  }
);
