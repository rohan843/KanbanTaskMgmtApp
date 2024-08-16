import React, { createContext, ReactNode } from "react";

interface LayoutContextType {
  layout: "mobile" | "tablet" | "desktop";
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

function getLayout() {
  const width = document.documentElement.clientWidth;

  if (width >= 1440) {
    return "desktop";
  } else if (width >= 768) {
    return "tablet";
  } else {
    return "mobile";
  }
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const layout = getLayout();

  return (
    <LayoutContext.Provider value={{ layout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider, LayoutContext };

export type { LayoutContextType };
