import { Task } from "@/types";

export const groupTasksByStatus = (
  tasks: Task[]
): Record<Task["status"], Task[]> => {
  const statusOrder: Task["status"][] = [
    "To-Do List",
    "In Progress",
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

export const priorityStyles = {
  High: {
    bg: "red-500",
    text: "text-white",
  },
  Medium: { bg: "orange-500", text: "text-white" },
  Low: { bg: "green-500", text: "text-white" },
};

export const statusStyles: Record<string, Record<string, string>> = {
  "Not Started": {
    bg: "orange-500",
    text: "text-white",
    circleColor: "orange",
  },
  "In Progress": { bg: "blue-500", text: "text-white", circleColor: "blue" },
  "To-Do List": { bg: "green-500", text: "text-white", circleColor: "green" },
};
