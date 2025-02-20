"use client";
import React, { useContext } from "react";
import Column from "./Column";
import { TaskContext } from "../context/TaskContext";

const Board: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div className="text-white">Loading tasks...</div>;
  }

  const { tasks } = taskContext;

  return (
    <div className="flex space-x-4 p-8 bg-gray-950 min-h-screen">
      {["Not Started", "In Progress", "To-Do List"].map((status) => (
        <Column
          key={status}
          title={status}
          tasks={tasks.filter((task) => task.status === status)}
        />
      ))}
    </div>
  );
};

export default Board;
