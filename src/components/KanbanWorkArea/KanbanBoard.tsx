import React from "react";
import { BoardName, SingleBoardData } from "../../types";
import KanbanWorkAreaBackground from "./KanbanWorkAreaBackground";
import KanbanColumn from "./KanbanColumn";
import classNames from "classnames";
import useThemeProvider from "../../hooks/useThemeProvider";

const AddColumnButton: React.FC<{ onClick: (e: React.MouseEvent) => void }> = ({
  onClick,
}) => {
  const { darkTheme } = useThemeProvider();
  return (
    <div
      className={classNames(
        "w-[304px] pl-[24px] mt-[24px] flex flex-col h-[87vh] add-column",
        {
          "add-column-dark": darkTheme,
          "add-column-light": !darkTheme,
        }
      )}
    >
      <div className="mb-[24px] w-full flex flex-row items-center opacity-0">
        <div
          className={classNames("h-[15px] w-[15px] rounded-full mr-[12px]")}
        />
        <p className="kanban-column-header uppercase select-none"> </p>
      </div>
      <button
        className="w-[280px] flex flex-col grow justify-center items-center rounded-[6px]"
        onClick={(e) => onClick(e)}
      >
        <p>+ New Column</p>
      </button>
    </div>
  );
};

type Props = { boardData: SingleBoardData; activeBoard: BoardName };

// TODO: Implement drag based and swipe based scroll.
const KanbanBoard: React.FC<Props> = ({ boardData, activeBoard }) => {
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
    <KanbanWorkAreaBackground
      classNameOuter="overflow-auto cursor-grab"
      classNameInner="flex flex-row pr-[24px] pb-[24px] w-max h-max"
    >
      {[
        columnsArrayRender,
        <AddColumnButton
          key={`new-col-for-${activeBoard}-$&#`}
          onClick={() => {}}
        />,
      ]}
    </KanbanWorkAreaBackground>
  );
};

export default KanbanBoard;
