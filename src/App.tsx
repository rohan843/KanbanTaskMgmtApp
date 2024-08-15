import React from "react";
import useKanbanProvider from "./hooks/useKanbanProvider";
import KanbanBoard from "./components/KanbanWorkArea/KanbanBoard";

const App: React.FC = () => {
  const { activeBoard } = useKanbanProvider();
  return (
    <div className="w-full h-full">
      {activeBoard && <KanbanBoard activeBoard={activeBoard} />}
    </div>
  );
};

export default App;
