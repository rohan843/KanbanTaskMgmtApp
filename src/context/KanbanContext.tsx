import React, { createContext, ReactNode, useState } from "react";
import { BoardName, BoardsData } from "../types";

interface KanbanContextType {
  activeBoard: BoardName | null;
  setActiveBoardTo: (newBoard: BoardName) => void;
  boardsData: BoardsData;
  updateBoardsDataTo: (newBoardsData: BoardsData) => void;
}

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

interface KanbanProviderProps {
  children: ReactNode;
}

const initialBoardsData: BoardsData = {};

const KanbanProvider: React.FC<KanbanProviderProps> = ({ children }) => {
  const [boardsData, setBoardsData] = useState<BoardsData>(initialBoardsData);
  const updateBoardsDataTo = (newBoardsData: BoardsData) => {
    setBoardsData(newBoardsData);
  };
  const [activeBoard, setActiveBoard] = useState<BoardName | null>(null);
  const setActiveBoardTo = (newBoard: BoardName) => {
    setActiveBoard(newBoard);
  };

  return (
    <KanbanContext.Provider
      value={{ activeBoard, setActiveBoardTo, boardsData, updateBoardsDataTo }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export { KanbanProvider, KanbanContext };

export type { KanbanContextType };
