import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";
import type { ThemeContextType } from "../types/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme !== null ? JSON.parse(storedTheme) : true;
  });
  useEffect(
    () => localStorage.setItem("theme", JSON.stringify(theme)),
    [theme]
  );
  const toggleTheme = () => setTheme(!theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export default ThemeProvider;
