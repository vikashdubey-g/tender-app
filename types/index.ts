import React, { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "Not Started" | "In Progress" | "To-Do List";
  assignee: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  commentCount: number;
  attachmentCount: number;
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

export interface PriorityChipProps {
  label: "High" | "Medium" | "Low";
}

export interface StatusChipProps {
  label: "Not Started" | "In Progress" | "To-Do List";
}

export interface TaskDetailsProps {
  task: Task;
}
