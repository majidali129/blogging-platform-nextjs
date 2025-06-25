import { getAuth } from "@/features/auth/queries/get-auth";
import { prisma } from "@/lib/prisma";
import { Comment, Post, Tag, User } from "@prisma/client";

export type ExtendedComment = Comment & {
  author: Pick<User, "id" | "userName" | "name" | "profilePhoto">;
};
export type ExtendedPost = Post & {
  author: Pick<User, "id" | "userName" | "name" | "profilePhoto">;
  tags: Tag[];
  bookmarks: Pick<User, "id" | "userName">[];
  comments: ExtendedComment[];
  isBookmarkedByUser: boolean;
  totalBookmarks: number;
};

export const getAllPosts = async (): Promise<ExtendedPost[]> => {
  const { user } = await getAuth();
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: { id: true, userName: true, name: true, profilePhoto: true },
      },
      tags: true,
      bookmarks: {
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

  return posts.map((post) => ({
    ...post,
    isBookmarkedByUser: post.bookmarks.some(
      (bookmark) => bookmark.id === user?.id
    ),
    totalBookmarks: post._count.bookmarks,
  }));
};
