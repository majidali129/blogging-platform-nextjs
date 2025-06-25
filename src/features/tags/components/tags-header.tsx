import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TagsSearch } from "./tags-search";

export const TagsHeader = () => {
  return (
    <header className="flex items-center py-2 justify-between ">
      <h1 className="font-bold text-3xl">Tags</h1>
      <div className="flex items-center gap-1.5">
        <Button asChild variant="ghost">
          <Link href="">Following tags</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="">Hidden tags</Link>
        </Button>

        <TagsSearch />
      </div>
    </header>
  );
};
