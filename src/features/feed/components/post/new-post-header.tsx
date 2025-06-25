import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const NewPostHeader = () => {
  return (
    <nav className="flex items-center justify-between  px-4 py-2 bg-background  relative">
      <div className="flex items-center justify-between gap-x-4 flex-1 max-w-[59.2rem]">
        <div className="flex items-center gap-1.5">
          <Logo />
          <p>Create Post</p>
        </div>
        <div className="space-x-1">
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost">Preview</Button>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="absolute right-3">
        <X className="size-4" />
      </Button>
    </nav>
  );
};
