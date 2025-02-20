import React, { memo } from "react";
import { TaskCardProps } from "@/types";
import Image from "next/image";
import StatusChip from "@/ui/StatusChip";
import PriorityChip from "@/ui/PriorityChip";
// assets
import threeDot from "@/assets/svg/dots-horizontal.svg";
import calendarIcon from "@/assets/svg/calendar.svg";
import avatarIcon from "@/assets/svg/avatar.svg";
import commentIcon from "@/assets/svg/comment.svg";
import attachmentIcon from "@/assets/svg/attachment.svg";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const {
    status,
    priority,
    dueDate,
    assignee,
    title,
    description,
    commentCount,
    attachmentCount,
  } = task;

  return (
    <div className="bg-gray-800 rounded-lg shadow-md text-white">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <StatusChip label={status} />
          <Image src={threeDot} alt="Three dot" width={24} height={24} />
        </div>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="mt-2 text-sm text-gray-300 flex justify-between items-center">
          <span>{assignee}</span>
          <Image
            src={avatarIcon}
            alt="Avatar icon"
            width={12}
            height={12}
          />{" "}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="text-sm text-gray-300 flex items-center gap-2">
            <Image
              src={calendarIcon}
              alt="Calendar icon"
              width={12}
              height={12}
            />{" "}
            <span>{dueDate}</span>
          </div>
          <PriorityChip label={priority} />
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 border-t border-gray-500">
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <Image src={commentIcon} alt="Comment icon" width={12} height={12} />
          {commentCount} Comments
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <Image
            src={attachmentIcon}
            alt="Attachment icon"
            width={12}
            height={12}
          />
          {attachmentCount} Attachments
        </div>
      </div>
    </div>
  );
};

export default memo(TaskCard);
