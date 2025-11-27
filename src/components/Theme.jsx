import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Laptop, MoonIcon, SunIcon } from "lucide-react";
import clsx from "clsx";

const Theme = () => {
  const [theme, setTheme] = useState("system");

  // Load theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    applyTheme(saved || "system");
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (value) => {
    if (value === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (value === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // system theme
      localStorage.removeItem("theme");

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      document.documentElement.classList.toggle("dark", prefersDark);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer mt-1.5 select-none outline-0">
          <img src="/icons/mode.svg" className="icon dark:invert" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit">
        <DropdownMenuItem
          value="light"
          onClick={() => setTheme("light")}
          className={clsx(
            theme === "light" && "bg-accent text-accent-foreground"
          )}
        >
          <SunIcon className="mr-2" fill={theme === "light" ? "#ffc030" : ""} />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          value="dark"
          onClick={() => setTheme("dark")}
          className={clsx(
            theme === "dark" && "bg-accent text-accent-foreground"
          )}
        >
          <MoonIcon
            className="mr-2"
            fill={theme === "dark" ? "#ff6157" : "transparent"}
          />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          value="system"
          onClick={() => setTheme("system")}
          className={clsx(
            theme === "system" && "bg-accent text-accent-foreground"
          )}
        >
          <Laptop className="mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
