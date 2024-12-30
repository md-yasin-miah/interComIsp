"use client"; // Required for React hooks in Next.js app directory

import { THEME } from "@/helper/config";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.light);

  useEffect(() => {
    // Apply the theme to the document root
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme(THEME.dark) : setTheme(THEME.light);
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME.light ? THEME.dark : THEME.light));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
