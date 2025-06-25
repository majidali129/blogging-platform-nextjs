import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center  py-1.5 px-2 bg-zinc-950 w-fit text-zinc-50 dark:outline-1 dark:outline-foreground font-semibold rounded tracking-tight">
      <Link href={"/"}>BLOGSY</Link>
    </div>
  );
};
