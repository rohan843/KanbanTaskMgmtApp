// Boards
export type BoardName = string; // Name of board is unique

// Tasks
export type TaskId = number; // Id of task is unique
export type SingleTaskData = {
  taskId: TaskId;
  taskTitle: string;
  taskDescription: string;
  subtasksArray: Array<{ checked: boolean; title: string }>;
};

// Task Columns
export type ColumnName = string; // Name of column is unique
export type SingleColumnData = {
  name: ColumnName;
  tasks: Array<SingleTaskData>;
};

// Board Containers
export type SingleBoardData = Array<SingleColumnData>;
export interface BoardsData {
  [key: BoardName]: SingleBoardData;
}
