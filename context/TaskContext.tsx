"use client";
import React, { createContext, useState } from "react";

import { initialTasks } from "@/data";

import { Task, TaskContextType, TaskProviderProps } from "@/types";

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
