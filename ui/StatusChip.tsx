import React, { memo } from "react";
import { StatusChipProps } from "@/types";
import { statusStyles } from "@/utils";

const StatusChip: React.FC<StatusChipProps> = ({ label }) => {
  return (
    <div
      className={`flex items-center bg-${statusStyles[label]?.bg} bg-opacity-10 text-white text-xs font-semibold px-3 py-1 rounded-full`}
    >
      <span
        className={`w-2 h-2 bg-${statusStyles[label]?.circleColor}-400 rounded-full mr-2`}
      ></span>
      {label}
    </div>
  );
};

export default memo(StatusChip);
