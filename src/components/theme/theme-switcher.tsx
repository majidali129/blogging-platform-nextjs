"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleTheme}
      className="text-foreground relative"
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] " />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] " />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
