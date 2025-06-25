import { Button } from "@/components/ui/button";

type PostCommentHeaderProps = {
  totalComments: number;
};
export const PostCommentHeader = ({
  totalComments,
}: PostCommentHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h2>Top comments ({totalComments})</h2>
      <Button variant="outline">Subscribe</Button>
    </div>
  );
};
