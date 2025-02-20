import React from "react";
import { ColumnProps } from "@/types";

import TaskCard from "./TaskCard";

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  return (
    <div className="w-1/3 bg-gray-900 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
