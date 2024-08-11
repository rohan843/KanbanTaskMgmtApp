import classNames from "classnames";
import React from "react";
import useThemeProvider from "../hooks/useThemeProvider";
// import { taskId } from "../types";

// type Props = {
//   taskId: taskId;
// };

const KanbanTask: React.FC = () => {
  const taskName = "Task Name";
  const totalSubtaskCount = 2;
  const finishedSubtaskCount = 0;

  const { darkTheme } = useThemeProvider();

  return (
    <div
      className={classNames(
        "w-[280px] min-h-[88px] rounded-[8px] px-[16px] py-[23px] kanban-task-card",
        {
          "kanban-task-card-light": !darkTheme,
          "kanban-task-card-dark": darkTheme,
        }
      )}
      title={taskName}
    >
      <h1
        className={classNames("kanban-task-card-title", {
          "kanban-task-card-title-light": !darkTheme,
          "kanban-task-card-title-dark": darkTheme,
        })}
      >
        {taskName}
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
