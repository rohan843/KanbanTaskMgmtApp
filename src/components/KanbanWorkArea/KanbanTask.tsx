import classNames from "classnames";
import React from "react";
import useThemeProvider from "../../hooks/useThemeProvider";
import { TaskId } from "../../types";

type Props = {
  taskId: TaskId;
  taskTitle: string;
  totalSubtaskCount: number;
  finishedSubtaskCount: number;
  onClick: (e: React.MouseEvent) => void;
};

const KanbanTask: React.FC<Props> = ({
  taskId,
  taskTitle,
  totalSubtaskCount,
  finishedSubtaskCount,
  onClick,
}) => {
  const { darkTheme } = useThemeProvider();

  return (
    <div
      className={classNames(
        "w-[280px] min-h-[88px] rounded-[8px] px-[16px] py-[23px] mb-[20px] kanban-task-card",
        {
          "kanban-task-card-light": !darkTheme,
          "kanban-task-card-dark": darkTheme,
        }
      )}
      title={taskTitle}
      key={taskId}
      onClick={(e) => {
        onClick(e);
      }}
    >
      <h1
        className={classNames("kanban-task-card-title", {
          "kanban-task-card-title-light": !darkTheme,
          "kanban-task-card-title-dark": darkTheme,
        })}
      >
        {taskTitle}
      </h1>
      <p
        className={classNames("mt-1 kanban-task-card-status", {
          "kanban-task-card-status-light": !darkTheme,
          "kanban-task-card-status-dark": darkTheme,
        })}
      >
        {finishedSubtaskCount} of {totalSubtaskCount} subtasks
      </p>
    </div>
  );
};

export default KanbanTask;
