import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Storage } from '../lib/util';
import { Color } from '../lib/style';

const Context = createContext();

export const useThemeContext = () => useContext(Context);

const getPreferColor = () => {
  const stored = Storage.get('theme');

  if (stored) return stored;

  if (!window.matchMedia) {
    Storage.set('theme', 'light');
    return 'light';
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    Storage.set('theme', 'dark');
    return 'dark';
  }

  Storage.set('theme', 'light');
  return 'light';
};

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState(getPreferColor());

  const isLight = useMemo(() => theme === 'light', [theme]);

  const colors = useMemo(() => Color[theme], [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      Storage.set('theme', newTheme);
      return newTheme;
    });
  }, []);

  return <Context.Provider value={{ colors, theme, isLight, toggleTheme }}>{children}</Context.Provider>;
}
