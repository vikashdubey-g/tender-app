import React, { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "Not Started" | "In Progress" | "To-Do List";
  assignee: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
}

export interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface TaskProviderProps {
  children: ReactNode;
}

export interface ColumnProps {
  title: string;
  tasks: Task[];
}

export interface TaskCardProps {
  task: Task;
}
