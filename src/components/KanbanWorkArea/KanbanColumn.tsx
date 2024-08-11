import React from "react";
import KanbanTask from "./KanbanTask";
import classNames from "classnames";
import { SingleColumnData } from "../../types";

const colHandleColorClasses = ["blue-bg", "purple-bg", "green-bg"];

type Props = {
  columnIndex: number;
  columnData: SingleColumnData;
};

const KanbanColumn: React.FC<Props> = ({ columnIndex, columnData }) => {
  const columnName = columnData.name;
  const taskCount = columnData.tasks.length;

  const colHandleColorClass =
    colHandleColorClasses[columnIndex % colHandleColorClasses.length];

  const innerTasks = columnData.tasks.map((taskData) => {
    return (
      <KanbanTask
        taskId={taskData.taskId}
        taskTitle={taskData.taskTitle}
        finishedSubtaskCount={
          taskData.subtasksArray.filter((subtask) => subtask.checked).length
        }
        totalSubtaskCount={taskData.subtasksArray.length}
        onClick={() => {}}
      />
    );
  });

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
      <div className="w-full flex flex-col">{innerTasks}</div>
    </div>
  );
};

export default KanbanColumn;
