import React, { FC, memo } from "react";
import { StatusChipProps } from "@/types";
import { statusStyles } from "@/utils";

const StatusChip: FC<StatusChipProps> = ({ label }) => {
  return (
    <div
      className={`flex items-center ${
        statusStyles[label]?.bg || "bg-red-500"
      } bg-opacity-10 text-white text-xs font-semibold px-3 py-1 rounded-full`}
    >
      <span
        className={`w-2 h-2 ${
          statusStyles[label]?.circleColor || "bg-red-400"
        } rounded-full mr-2`}
      ></span>
      {label}
    </div>
  );
};

export default memo(StatusChip);
