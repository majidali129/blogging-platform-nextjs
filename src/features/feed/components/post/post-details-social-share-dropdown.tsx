import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Ellipsis } from "lucide-react";

export const PostDetailsSocialShareDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Ellipsis className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        align="start"
        className="*:hover:!bg-primary/40 *:not-first:text-foreground/70 "
      >
        <DropdownMenuItem className="hover:text-foreground hover:bg-primary  cursor-pointer font-semibold flex items-center justify-between">
          <span>Copy link</span>
          <Copy />
        </DropdownMenuItem>
        <DropdownMenuItem>Share to X</DropdownMenuItem>
        <DropdownMenuItem>Share to LinkedIn</DropdownMenuItem>
        <DropdownMenuItem>Share to Facebook</DropdownMenuItem>
        <DropdownMenuItem>Share to WhatsApp</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
