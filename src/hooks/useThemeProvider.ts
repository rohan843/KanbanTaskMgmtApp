import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

const useThemeProvider = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeProvider must be used within a ThemeProvider.");
  }
  return context;
};

export default useThemeProvider;
