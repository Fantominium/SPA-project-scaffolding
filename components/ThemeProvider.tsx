'use client'

import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const obj = useMemo(()=>({darkMode, toggleTheme }), [darkMode])
  return (
    <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>
  );
};
