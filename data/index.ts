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
    commentCount: 2,
    attachmentCount: 1,
  },
  {
    id: "2",
    title: "Construction Tender 2",
    description: "Description goes here about the tender",
    status: "In Progress",
    assignee: "Jane Doe",
    dueDate: "22 Dec 24",
    priority: "High",
    commentCount: 5,
    attachmentCount: 3,
  },
  {
    id: "3",
    title: "Road Maintenance Project",
    description: "Planning and execution for road maintenance",
    status: "To-Do List",
    assignee: "Alice Smith",
    dueDate: "25 Dec 24",
    priority: "Medium",
    commentCount: 3,
    attachmentCount: 2,
  },
  {
    id: "4",
    title: "Water Pipeline Repair",
    description: "Fixing leaks and improving infrastructure",
    status: "To-Do List",
    assignee: "Emily Davis",
    dueDate: "15 Jan 25",
    priority: "Low",
    commentCount: 4,
    attachmentCount: 2,
  },
  {
    id: "5",
    title: "Hospital Renovation",
    description: "Upgrading hospital facilities and services",
    status: "To-Do List",
    assignee: "Henry Adams",
    dueDate: "5 Feb 25",
    priority: "High",
    commentCount: 5,
    attachmentCount: 3,
  },
  {
    id: "6",
    title: "Renewable Energy Installation",
    description: "Installing solar panels and wind turbines",
    status: "In Progress",
    assignee: "Jack Carter",
    dueDate: "20 Feb 25",
    priority: "Medium",
    commentCount: 8,
    attachmentCount: 4,
  },
  {
    id: "7",
    title: "Traffic Signal Optimization",
    description: "Enhancing traffic flow through AI-based signals",
    status: "To-Do List",
    assignee: "Karen White",
    dueDate: "28 Feb 25",
    priority: "Low",
    commentCount: 1,
    attachmentCount: 1,
  },
  {
    id: "8",
    title: "Cybersecurity Audit",
    description: "Assessing security measures for public services",
    status: "To-Do List",
    assignee: "Noah Bennett",
    dueDate: "15 Mar 25",
    priority: "Medium",
    commentCount: 7,
    attachmentCount: 4,
  },
];
