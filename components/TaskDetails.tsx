"use client";
import React, { FC, useState } from "react";
import { TaskDetailsProps } from "@/types";
import { useRouter } from "next/navigation";

const TaskDetails: FC<TaskDetailsProps> = ({ task }) => {
  const router = useRouter();
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <button onClick={() => router.back()} className="text-blue-400 mb-4">
        ← Back
      </button>

      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="text-gray-400 mt-2">{task.description}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Comments</h2>
        <div className="mt-2 space-y-2">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-md">
                {comment}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-grow bg-gray-700 text-white p-2 rounded-md outline-none"
          />
          <button
            onClick={addComment}
            className="ml-2 bg-blue-500 px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
