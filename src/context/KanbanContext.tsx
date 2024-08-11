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

// TODO: Load info from backend here when website first opens.
const initialBoardsData: BoardsData = {
  "Platform Launch": [
    {
      name: "TODO",
      tasks: [
        {
          taskId: "a",
          taskTitle: "Build UI for onboarding flow",
          taskDescription: "",
          subtasksArray: [
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
          ],
        },
        {
          taskId: "b",
          taskTitle: "Build UI for search",
          taskDescription: "",
          subtasksArray: [
            {
              checked: false,
              title: "qwerty",
            },
          ],
        },
        {
          taskId: "c",
          taskTitle: "Build settings UI",
          taskDescription: "",
          subtasksArray: [
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
          ],
        },
        {
          taskId: "d",
          taskTitle: "QA and test all major user journeys",
          taskDescription: "",
          subtasksArray: [
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
          ],
        },
      ],
    },
    {
      name: "DOING",
      tasks: [
        {
          taskId: "e",
          taskTitle: "Build UI for onboarding flow",
          taskDescription: "",
          subtasksArray: [
            {
              checked: true,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
            {
              checked: false,
              title: "qwerty",
            },
          ],
        },
        {
          taskId: "f",
          taskTitle: "Build UI for search",
          taskDescription: "",
          subtasksArray: [
            {
              checked: false,
              title: "qwerty",
            },
          ],
        },
      ],
    },
    {
      name: "DONE",
      tasks: [
        {
          taskId: "g",
          taskTitle: "Build UI for search",
          taskDescription: "",
          subtasksArray: [
            {
              checked: true,
              title: "qwerty",
            },
            {
              checked: true,
              title: "qwerty",
            },
          ],
        },
      ],
    },
  ],
  "Marketing Plan": [],
  Roadmap: [],
};

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
