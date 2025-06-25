"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { GlobalSearch } from "../global-search";
import { ThemeSwitcher } from "../theme/theme-switcher";
import { Button } from "../ui/button";
import { signInPath, signUpPath } from "@/paths";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { AccountDropdown } from "./account-dropdown";

export const Header = () => {
  const { user } = useAuth();
  return (
    <nav className="flex fixed top-0 w-full z-40 items-center justify-between px-4 py-2 bg-background border-b border-border">
      <div className="flex items-center gap-x-4 flex-1">
        <Logo />
        <GlobalSearch />
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        {user ? (
          <>
            <Button variant="outline" asChild className="hidden md:block">
              <Link href="/new">Create Post</Link>
            </Button>

            <AccountDropdown user={user} />

            {/* <Button variant="link">
              <BellIcon />
            </Button> */}
          </>
        ) : (
          <>
            <Button asChild>
              <Link href={signUpPath}>Sign Up</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={signInPath}>Sign In</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};
