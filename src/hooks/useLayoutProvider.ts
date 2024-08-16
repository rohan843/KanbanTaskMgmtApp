import { useContext } from "react";
import { LayoutContext, LayoutContextType } from "../context/LayoutContext";

const useLayoutProvider = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutProvider must be used within a LayoutProvider.");
  }
  return context;
};

export default useLayoutProvider;
