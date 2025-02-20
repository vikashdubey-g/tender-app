"use client";
import React, { useContext, useMemo } from "react";
import Column from "./Column";
import { TaskContext } from "../context/TaskContext";
import { groupTasksByStatus } from "@/utils";

const Board: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div className="text-white">Loading tasks...</div>;
  }

  const { tasks } = taskContext;

  const groupedTasks = useMemo(() => {
    return groupTasksByStatus(tasks);
  }, [tasks]);

  return (
    <div className="flex space-x-4 p-8 bg-gray-700 min-h-screen">
      {Object.entries(groupedTasks).map(([status, groupTasks]) => (
        <Column key={status} title={status} tasks={groupTasks} />
      ))}
    </div>
  );
};

export default Board;
