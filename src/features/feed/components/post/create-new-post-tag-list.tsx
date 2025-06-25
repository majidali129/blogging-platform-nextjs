import { Badge } from "@/components/ui/badge";
import { Tag } from "@prisma/client";

type CreateNewPostTagListProps = {
  tags: Tag[];
  addTagAction: (tag: Tag) => void;
};

export const CreateNewPostTagList = ({
  tags,
  addTagAction,
}: CreateNewPostTagListProps) => {
  return (
    <div className="max-h-40 h-full overflow-y-auto w-full">
      <div className="py-3 px-2.5 bg-transparent text-foreground font-semibold border-b border-input">
        Top tags
      </div>
      <ul className="!list-none space-y-1.5">
        {tags.map((tag) => (
          <div
            role="button"
            onClick={() => addTagAction(tag)}
            key={tag.id}
            className="py-1.5 px-2.5 bg-transparent cursor-pointer group text-foreground hover:bg-background/80 space-y-0.5 rounded "
          >
            <Badge
              variant="secondary"
              className="font-semibold !bg-transparent  px-0 group-hover:*:!text-primary"
            >
              <span style={{ color: tag.color.bg }}>#</span>
              <span className="text-zinc-50">{tag.name}</span>
            </Badge>
            <p className="text-sm">
              Once relegated to the browser as one of the 3 core technologies of
              the web
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};
