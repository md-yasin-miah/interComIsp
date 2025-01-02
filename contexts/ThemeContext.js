"use client"; // Required for React hooks in Next.js app directory
import { THEME } from "@/helper/config";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.light);
  // set theme to dark if user prefers dark mode
  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.dark : THEME.light);
  }, []);

  useEffect(() => {
    // Apply the theme to the document root
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
