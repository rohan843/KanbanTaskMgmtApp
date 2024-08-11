import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { KanbanProvider } from "./context/KanbanContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KanbanProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </KanbanProvider>
  </StrictMode>
);
