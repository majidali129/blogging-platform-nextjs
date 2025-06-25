"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import { postDetailsPath } from "@/paths";
import slugify from "slugify";
import { ExtendedPost } from "../queries/get-all-posts";
import { formatDistance } from "date-fns";
import { useOptimisticBookmark } from "../hooks/use-optimistic-bookmark";
import { startTransition } from "react";
import { toggleBookmark } from "../actions/bookmark-post";

type FeedListItemProps = {
  post: ExtendedPost;
};

export const FeedListItem = ({ post }: FeedListItemProps) => {
  const { optimisticBookmarks, addOptimisticBookmarks } =
    useOptimisticBookmark(post);
  console.log("Post", post);

  const handleToggleBookmark = async () => {
    startTransition(async () => {
      addOptimisticBookmarks({ toggle: !optimisticBookmarks.isPostBookmarked });
      await toggleBookmark(post.id);
    });
  };
  return (
    <Card className="min-h-[220px]">
      <CardContent>
        <div className="flex items-start gap-2">
          <Avatar className="rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <div className="space-y-3.5">
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="text-[.8rem] font-semibold">Majid Ali</h4>
                <span className="text-sm text-muted-foreground">
                  {formatDistance(post.createdAt, new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <div>
                <Link
                  prefetch
                  href={postDetailsPath(
                    `${post.author.userName}`,
                    post.id,
                    slugify(post.title)
                  )}
                >
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {post.title}
                  </CardTitle>
                </Link>
                <ul className="flex items-center gap-3 mt-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag.id} variant="ghost">
                      #{tag.name}
                    </Badge>
                  ))}
                </ul>
                {post.tags.length <= 0 && (
                  <div className="flex items-center gap-3 mt-1"></div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between text-muted-foreground gap-3.5 ">
              <div className="flex items-center gap-2 -ml-3">
                <Button variant="ghost" size="sm">
                  <span>❤️</span> {12}
                  <span> Reactions </span>
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle />
                  Add Comment
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span>7 min read</span>
                <Button
                  // asChild
                  variant="ghost"
                  size="icon"
                  className="hover:!bg-primary/30"
                  onClick={handleToggleBookmark}
                >
                  <BookmarkIcon
                    className={`w-5 h-5 cursor-pointer ${
                      optimisticBookmarks.isPostBookmarked
                        ? "fill-zinc-900 dark:fill-white stroke-0 "
                        : ""
                    }`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
