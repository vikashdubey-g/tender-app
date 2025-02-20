import React, { FC, memo } from "react";
import { PriorityChipProps } from "@/types";
import { priorityStyles } from "@/utils";

const PriorityChip: FC<PriorityChipProps> = ({ label }) => {
  return (
    <div
      className={`px-3 py-0.75 text-xs rounded bg-${priorityStyles[label]?.bg}`}
    >
      {label}
    </div>
  );
};

export default memo(PriorityChip);
