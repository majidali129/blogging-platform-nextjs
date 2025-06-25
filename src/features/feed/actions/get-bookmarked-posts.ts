import { getAuth } from "@/features/auth/queries/get-auth";
import { prisma } from "@/lib/prisma";
import { Post, Tag, User } from "@prisma/client";

export type BookmarkType = Pick<
  Post,
  "id" | "title" | "coverPhoto" | "createdAt" | "readTime"
> & {
  tags: Tag[];
  author: Pick<User, "id" | "userName" | "profilePhoto">;
};
export const getBookmarkedPosts = async (): Promise<BookmarkType[]> => {
  const { user } = await getAuth();
  console.log(user);
  if (!user || !user.id) return [];
  const userWithBookmarks = await prisma.user.findUnique({
    where: { id: user.id },
    select: {
      bookmarks: {
        select: {
          id: true,
          title: true,
          coverPhoto: true,
          createdAt: true,
          readTime: true,
          tags: true,

          author: {
            select: {
              id: true,
              userName: true,
              profilePhoto: true,
            },
          },
        },
      },
    },
  });

  return userWithBookmarks?.bookmarks ?? [];
};
