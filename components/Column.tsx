import React, { FC, memo } from "react";

import TaskCard from "./TaskCard";
import Image from "next/image";

import { ColumnProps } from "@/types";
import { statusStyles } from "@/utils";
import { useDroppable } from "@dnd-kit/core";

// assets
import threeDot from "@/assets/svg/dots-horizontal.svg";
import add from "@/assets/svg/add.svg";

const Column: FC<ColumnProps> = ({ title, tasks }) => {
  const { setNodeRef } = useDroppable({ id: title });

  return (
    <div ref={setNodeRef} className="w-1/3 bg-gray-950 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4 pl-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 ${
              statusStyles[title]?.circleColor || "bg-gray-400" // showing the dynamic color for the title
            } rounded-full`}
          />
          <h2 className="text-xl font-semibold text-white "> {title}</h2>
          <div
            className={`flex items-center justify-center w-5 h-5 bg-cyan-500 rounded-full`}
          >
            {tasks?.length || 0}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={add}
            alt="Add icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={threeDot}
            alt="Three dot"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="space-y-4 overflow-y-auto px-2 pt-2 pb-5 max-h-[600px]  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} /> // using the task card component
        ))}
      </div>
    </div>
  );
};

export default memo(Column);
