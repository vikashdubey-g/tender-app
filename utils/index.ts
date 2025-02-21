import {
  HIGH,
  IN_PROGRESS,
  LOW,
  MEDIUM,
  NOT_STARTED,
  TO_DO_LIST,
} from "@/constants";

import { Task } from "@/types";

// util function for grouping the task by status
export const groupTasksByStatus = (
  tasks: Task[]
): Record<Task["status"], Task[]> => {
  const statusOrder: Task["status"][] = [
    TO_DO_LIST,
    IN_PROGRESS,
    "Not Started",
  ];

  const grouped = tasks.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {} as Record<Task["status"], Task[]>);

  return statusOrder.reduce((orderedAcc, status) => {
    if (grouped[status]) {
      orderedAcc[status] = grouped[status];
    }
    return orderedAcc;
  }, {} as Record<Task["status"], Task[]>);
};

// color mapping for the priority
export const priorityStyles = {
  [HIGH]: {
    bg: "bg-red-500",
    text: "text-white",
  },
  [MEDIUM]: { bg: "bg-orange-500", text: "text-white" },
  [LOW]: { bg: "bg-green-500", text: "text-white" },
};

// color mapping for the status
export const statusStyles: Record<string, Record<string, string>> = {
  [NOT_STARTED]: {
    bg: "bg-orange-500",
    text: "text-white",
    circleColor: "bg-orange-400",
  },
  [IN_PROGRESS]: {
    bg: "bg-blue-500",
    text: "text-white",
    circleColor: "bg-blue-400",
  },
  [TO_DO_LIST]: {
    bg: "bg-green-500",
    text: "text-white",
    circleColor: "bg-green-400",
  },
};

// client side search logic
export const searchTasks = (tasks: Task[], query: string) => {
  return tasks.filter((task) => {
    return Object.values(task)
      .join("")
      .toLowerCase()
      .includes(query.toLowerCase());
  });
};
