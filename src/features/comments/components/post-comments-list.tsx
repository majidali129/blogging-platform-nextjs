import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExtendedComment } from "@/features/feed/queries/get-all-posts";
import { format } from "date-fns";
import { Dot } from "lucide-react";

type PostCommentsListProps = {
  comments: ExtendedComment[];
};
export const PostCommentsList = ({ comments }: PostCommentsListProps) => {
  return (
    <ul className="space-y-3">
      {comments.map((comment) => (
        <div className="flex items-start gap-3" key={comment.id}>
          <div className="py-2.5">
            <Avatar>
              <AvatarImage src={comment.author.profilePhoto!} alt="@shadcn" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
          <div className="border border-input p-4 flex-1 rounded space-y-1.5">
            <div className="flex items-center">
              <h3 className="opacity-80">{comment.author.name}</h3>
              <Dot className="size-5 text-muted-foreground" />
              <span>{format(comment.createdAt, "d MMM")}</span>
            </div>
            <p className="text-[1rem] lg:text-[1.05rem]">{comment.content}</p>
          </div>
        </div>
      ))}
    </ul>
  );
};
