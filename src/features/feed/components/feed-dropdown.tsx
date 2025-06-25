import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

export const FeedDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start">
        <DropdownMenuLabel className="hover:text-primary cursor-pointer">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:!bg-background hover:!text-primary">
          Top this Week
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:!bg-background hover:!text-primary">
          Top this Month
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:!bg-background hover:!text-primary">
          Top this Year
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:!bg-background hover:!text-primary">
          Top this Infinity
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:!bg-background hover:!text-primary">
          Latest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
