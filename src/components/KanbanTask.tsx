import React from "react";
// import { taskId } from "../types";

// type Props = {
//   taskId: taskId;
// };

const KanbanTask: React.FC = () => {
  return (
    <div className="w-[280px] min-h-[88px] rounded-[8px] px-[16px] py-[23px] kanban-task-card">
      <h1 className="kanban-task-card-title-light">Task Name</h1>
      <p className="kanban-task-card-status-light">0 of 2 subtasks</p>
    </div>
  );
};

export default KanbanTask;
