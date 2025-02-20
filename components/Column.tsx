import React, { memo } from "react";
import { ColumnProps } from "@/types";
import Image from "next/image";
import TaskCard from "./TaskCard";
import { statusStyles } from "@/utils";
// assets
import threeDot from "@/assets/svg/dots-horizontal.svg";
import add from "@/assets/svg/add.svg";

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  return (
    <div className="w-1/3 bg-gray-950 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 bg-${statusStyles[title]?.circleColor}-400 rounded-full`}
          />
          <h2 className="text-xl font-semibold text-white "> {title}</h2>
          <div
            className={`flex items-center justify-center w-5 h-5 bg-cyan-500 rounded-full`}
          >
            {tasks?.length || 0}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={add} alt="Add icon" width={24} height={24} />
          <Image src={threeDot} alt="Three dot" width={24} height={24} />
        </div>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default memo(Column);
