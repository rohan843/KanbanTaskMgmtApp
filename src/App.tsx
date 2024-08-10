import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="text-red-500">Hello</div>
    </ThemeProvider>
  );
};

export default App;
