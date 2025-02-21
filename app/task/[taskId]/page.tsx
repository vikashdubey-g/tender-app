"use client";
import TaskDetails from "@/components/TaskDetails";
import { initialTasks } from "@/data";
import { useParams } from "next/navigation";

const TaskDetailPage = () => {
  const params = useParams();
  const taskId = params?.taskId as string;

  // finding the particluar taksk with the help of id
  const task = initialTasks.find((t) => t.id === taskId);

  if (!task) return <p className="text-white">Task not found</p>;

  return <TaskDetails task={task} />;
};

export default TaskDetailPage;
