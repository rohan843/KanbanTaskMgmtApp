import { useContext } from "react";
import { KanbanContext, KanbanContextType } from "../context/KanbanContext";

const useKanbanProvider = (): KanbanContextType => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("useKanbanProvider must be used within a KanbanProvider.");
  }
  return context;
};

export default useKanbanProvider;
