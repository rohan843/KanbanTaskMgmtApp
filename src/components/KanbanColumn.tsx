import React from "react";
import KanbanTask from "./KanbanTask";
import classNames from "classnames";

const colHandleColorClasses = ["blue-bg", "purple-bg", "green-bg"];

const KanbanColumn: React.FC = () => {
  const columnName = "TODO";
  const taskCount = 4;

  const columnIndex = 0;
  const colHandleColorClass =
    colHandleColorClasses[columnIndex % colHandleColorClasses.length];

  return (
    <div className="w-[304px] pl-[24px] mt-[24px]">
      <div className="mb-[24px] w-full flex flex-row items-center">
        <div
          className={classNames(
            "h-[15px] w-[15px] rounded-full bg-black mr-[12px]",
            colHandleColorClass
          )}
        />
        <p className="kanban-column-header uppercase">
          {columnName} ({taskCount})
        </p>
      </div>
      <div className="w-full flex flex-col">
        <KanbanTask />
        <KanbanTask />
        <KanbanTask />
        <KanbanTask />
        <KanbanTask />
      </div>
    </div>
  );
};

export default KanbanColumn;
