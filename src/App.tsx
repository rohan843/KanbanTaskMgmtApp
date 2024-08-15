import React from "react";
import useKanbanProvider from "./hooks/useKanbanProvider";
import KanbanBoard from "./components/KanbanWorkArea/KanbanBoard";

const App: React.FC = () => {
  const { activeBoard, boardsData } = useKanbanProvider();
  return (
    <div className="w-full h-full">
      {activeBoard && (
        <KanbanBoard
          activeBoard={activeBoard}
          boardData={boardsData[activeBoard]}
        />
      )}
    </div>
  );
};

export default App;
