import { Button } from "@/components/ui/button";
import { FeedDropdown } from "./feed-dropdown";

export const FeedHeader = () => {
  return (
    <header className="flex items-center justify-between w-full py-1.5">
      <div>
        <Button variant="secondary">Discover</Button>
        <Button
          variant="link"
          className="hover:no-underline text-foreground hover:text-primary tracking-wide"
        >
          Following
        </Button>
      </div>
      <FeedDropdown />
    </header>
  );
};
