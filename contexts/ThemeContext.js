"use client"; // Required for React hooks in Next.js app directory

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // Start as `null` to avoid mismatch

  useEffect(() => {
    // Determine the theme preference after the client is mounted
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    // Apply the theme to the document root
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Render nothing until the theme is determined to avoid hydration issues
  if (theme === null) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
