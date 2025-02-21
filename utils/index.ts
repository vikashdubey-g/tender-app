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
    bg: "bg-red-500",
    text: "text-white",
  },
  Medium: { bg: "bg-orange-500", text: "text-white" },
  Low: { bg: "bg-green-500", text: "text-white" },
};

export const statusStyles: Record<string, Record<string, string>> = {
  "Not Started": {
    bg: "bg-orange-500",
    text: "text-white",
    circleColor: "bg-orange-400",
  },
  "In Progress": {
    bg: "bg-blue-500",
    text: "text-white",
    circleColor: "bg-blue-400",
  },
  "To-Do List": {
    bg: "bg-green-500",
    text: "text-white",
    circleColor: "bg-green-400",
  },
};

export const statusBgClasses: Record<string, string> = {
  "Not Started": "bg-orange-400",
  "In Progress": "bg-blue-400",
  "To-Do List": "bg-green-400",
};

export const searchTasks = (tasks: Task[], query: string) => {
  return tasks.filter((task) => {
    return Object.values(task)
      .join("")
      .toLowerCase()
      .includes(query.toLowerCase());
  });
};
