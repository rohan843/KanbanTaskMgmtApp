import { useContext } from "react";
import { LayoutContext, LayoutContextType } from "../context/LayoutContext";

const useThemeProvider = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useThemeProvider must be used within a ThemeProvider.");
  }
  return context;
};

export default useThemeProvider;
