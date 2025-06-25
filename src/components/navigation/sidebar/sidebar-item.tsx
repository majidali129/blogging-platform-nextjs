"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement, ReactElement } from "react";

type SidebarItemProps = {
  href: string;
  icon: ReactElement<{ className?: string }>;
  label: string;
};
export const SidebarItem = ({ href, icon, label }: SidebarItemProps) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link
      href={href}
      className={`flex items-center text-foreground/70 dark:text-foreground/90 py-2 px-3 gap-1.5 ${
        isActive ? "bg-primary/20" : "bg-transparent"
      } hover:bg-primary/10 dark:hover:bg-sky-700 hover:text-primary dark:hover:text-foreground rounded group transition-all duration-100 ease-in-out`}
    >
      {cloneElement(icon, {
        className: "w-5 h-5",
      })}
      <span className="ml-2 group-hover:underline underline-offset-1 ">
        {label}
      </span>
    </Link>
  );
};
