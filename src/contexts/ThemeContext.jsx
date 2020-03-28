import React, { createContext, useContext, useState, useCallback } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export default ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
