"use client";
import React, { useContext, useMemo } from "react";
import Column from "./Column";
import { TaskContext } from "../context/TaskContext";
import { groupTasksByStatus } from "@/utils";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Task } from "@/types";
import Header from "./Header";

const Board: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div className="text-white">Loading tasks...</div>;
  }

  const { tasks, setTasks } = taskContext;

  const groupedTasks = useMemo(() => {
    return groupTasksByStatus(tasks);
  }, [tasks]);

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
            <Column key={status} title={status} tasks={groupTasks} />
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default Board;
