import React from "react";
import KanbanColumn from "./components/KanbanWorkArea/KanbanColumn";
import useKanbanProvider from "./hooks/useKanbanProvider";

const App: React.FC = () => {
  const { activeBoard, boardsData } = useKanbanProvider();
  return (
    activeBoard && (
      <KanbanColumn columnIndex={0} columnData={boardsData[activeBoard][0]} />
    )
  );
};

export default App;
