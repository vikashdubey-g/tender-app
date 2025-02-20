import { Task } from "@/types";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Construction Tender 1",
    description: "Description goes here about the tender",
    status: "Not Started",
    assignee: "John Doe",
    dueDate: "22 Dec 24",
    priority: "Low",
  },
  {
    id: "2",
    title: "Construction Tender 2",
    description: "Description goes here about the tender",
    status: "In Progress",
    assignee: "Jane Doe",
    dueDate: "22 Dec 24",
    priority: "High",
  },
];
