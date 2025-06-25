"use client"; // Required for React hooks in Next.js app directory
import { THEME } from "@/helper/config";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.light);
  // set theme to dark if user prefers dark mode
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.dark : THEME.light);
      localStorage.setItem('theme', theme);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the document root
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME.light ? THEME.dark : THEME.light));
    localStorage.setItem('theme', theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
