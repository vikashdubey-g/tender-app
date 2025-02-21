"use client";
import React, { useContext, useMemo } from "react";

import Column from "./Column";
import Header from "./Header";

import { TaskContext } from "../context/TaskContext";

import { groupTasksByStatus } from "@/utils";
import { Task } from "@/types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const Board: React.FC = () => {
  const taskContext = useContext(TaskContext);

  // Ensure tasks is always accessed safely
  const tasks = taskContext?.tasks ?? [];
  const setTasks = taskContext?.setTasks ?? (() => {});

  // Grouping the tasks by their status
  const groupedTasks = useMemo(() => {
    return groupTasksByStatus(tasks);
  }, [tasks]);

  if (!taskContext) {
    return <div className="text-white">Loading tasks...</div>;
  }

  // on dropoff of the card updating the tasks
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === active.id
          ? { ...task, status: over.id as Task["status"] }
          : task
      )
    );
  };

  return (
    <div className="bg-gray-700 min-h-screen pt-20 p-8">
      <Header />
      <DndContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 mt-6 ">
          {Object.entries(groupedTasks).map(([status, groupTasks]) => (
            <Column key={status} title={status} tasks={groupTasks} /> // using column component
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default Board;
