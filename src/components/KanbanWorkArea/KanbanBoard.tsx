import React from "react";
import { BoardName } from "../../types";

type Props = { activeBoard: BoardName };

const KanbanBoard: React.FC<Props> = ({ activeBoard }) => {
  console.log(activeBoard);
  return <div className="w-full h-full bg-red-300"></div>;
};

export default KanbanBoard;
