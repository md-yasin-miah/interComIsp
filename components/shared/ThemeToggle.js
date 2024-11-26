"use client"; // Required for client-side interactivity

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { THEME } from "@/config";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`flex items-center justify-center w-10 h-10 ${THEME.light === theme ? 'bg-gray-100 hover:bg-gray-200' : 'hover:bg-gray-100/35 bg-gray-100/10'} rounded-full`}
      onClick={toggleTheme}
    >
      {theme === THEME.light ? <BsMoonStarsFill /> : <IoSunny className="text-primary text-[20px]" />}
    </button>
  );
}
