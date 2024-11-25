"use client"; // Required for client-side interactivity

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-5 cursor-pointer bg-foreground text-background border-none rounded-md"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
