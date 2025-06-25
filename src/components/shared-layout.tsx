"use client";

import { usePathname } from "next/navigation";
import { Header } from "./navigation/header";
import { ReactNode } from "react";

type SharedLayoutProps = {
  children: ReactNode;
};
export const SharedLayout = ({ children }: SharedLayoutProps) => {
  const pathName = usePathname();
  const headerLessPaths = ["/auth/sign-up", "/auth/sign-in", "/new"];
  const shouldHideHeader = headerLessPaths.includes(pathName);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <main className="min-h-screen">{children}</main>
    </>
  );
};
