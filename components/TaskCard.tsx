import React from "react";
import { TaskCardProps } from "@/types";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <div className="flex justify-between">
        <span
          className={`px-2 py-1 text-sm rounded ${
            task.status === "In Progress" ? "bg-blue-500" : "bg-orange-500"
          }`}
        >
          {task.status}
        </span>
        <span
          className={`px-2 py-1 text-sm rounded ${
            task.priority === "High" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {task.priority}
        </span>
      </div>
      <h3 className="text-lg font-bold mt-2">{task.title}</h3>
      <p className="text-sm text-gray-400">{task.description}</p>
      <div className="mt-2 text-sm text-gray-300">
        Assignee: {task.assignee}
      </div>
      <div className="text-sm text-gray-300">Due: {task.dueDate}</div>
    </div>
  );
};

export default TaskCard;
