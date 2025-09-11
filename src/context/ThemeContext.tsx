import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
} from "react";

export type ThemeContextType = { theme: boolean; toggleTheme: Dispatch<any> };

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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
