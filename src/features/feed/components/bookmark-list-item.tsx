import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { postDetailsPath } from "@/paths";
import { format } from "date-fns";
import Link from "next/link";
import slugify from "slugify";
import { BookmarkType } from "../actions/get-bookmarked-posts";
import { Dot } from "lucide-react";

type BookmarkListItemProps = {
  post: BookmarkType;
};

export const BookmarkListItem = ({ post }: BookmarkListItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="rounded-full">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="space-y-3.5">
        <Link
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
        <div className="flex items-center flex-wrap">
          <h4 className="text-[.8rem] font-semibold">Majid Ali</h4>
          <Dot className="size-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {format(post.createdAt, "d MMM")}
          </span>
          <Dot className="size-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {post.readTime} min read
          </span>
          <Dot className="size-5 text-muted-foreground" />
          <ul className="flex items-center flex-wrap gap-3 mt-1">
            {post.tags.map((tag) => (
              <Badge key={tag.id} variant="ghost">
                #{tag.name}
              </Badge>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
