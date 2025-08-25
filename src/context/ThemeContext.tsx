import { createContext, useState, type Dispatch } from "react";

export type ThemeContextType = { theme: boolean; toggleTheme: Dispatch<any> };

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(true);
  const toggleTheme = () => setTheme(!theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
