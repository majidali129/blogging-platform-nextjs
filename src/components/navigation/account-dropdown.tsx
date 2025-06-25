import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@prisma/client";
import Link from "next/link";
import {
  accountStatsPath,
  createPostPath,
  dashboardPath,
  readingListPath,
  settingsPath,
} from "@/paths";
import { logoutUser } from "@/features/auth/actions/logout";

type AccountDropdownProps = {
  user: User;
};
export const AccountDropdown = ({ user }: AccountDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar className=" size-9 md:size-10">
          <AvatarImage src={user.profilePhoto || ""} />
          <AvatarFallback>
            {user.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="px-4 w-52">
        <DropdownMenuLabel className="hover:bg-primary/30 w-full px-5 hover:underline underline-offset-2 rounded">
          <Link
            href={accountStatsPath(user.userName, user.id)}
            className="w-full"
          >
            <h4>{user.name}</h4>
            <span className="line-clamp-1">
              {user.userName}_{user.id}
            </span>
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-5 hover:!bg-primary/30 hover:underline underline-offset-1">
          <Link href={dashboardPath}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-5 hover:!bg-primary/30 hover:underline underline-offset-1">
          <Link href={createPostPath}>Create Post</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-5 hover:!bg-primary/30 hover:underline underline-offset-1">
          <Link href={readingListPath}>Reading List</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-5 hover:!bg-primary/30 hover:underline underline-offset-1">
          <Link href={settingsPath}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-5 hover:!bg-primary/30">
          <form action={logoutUser}>
            <button
              type="submit"
              className="hover:underline underline-offset-1"
            >
              Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
