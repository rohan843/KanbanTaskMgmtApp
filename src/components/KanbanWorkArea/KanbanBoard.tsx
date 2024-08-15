import React from "react";
import { SingleBoardData } from "../../types";
import KanbanWorkAreaBackground from "./KanbanWorkAreaBackground";
import KanbanColumn from "./KanbanColumn";

type Props = { boardData: SingleBoardData };

const KanbanBoard: React.FC<Props> = ({ boardData }) => {
  const columnsArrayRender = boardData.map((colData, index) => {
    return (
      <KanbanColumn
        columnIndex={index}
        columnData={colData}
        key={colData.name}
      />
    );
  });
  return (
    <KanbanWorkAreaBackground className="flex flex-row overflow-auto">
      {columnsArrayRender}
    </KanbanWorkAreaBackground>
  );
};

export default KanbanBoard;
