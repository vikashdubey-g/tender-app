import Board from "@/components/Board";
import { TaskProvider } from "@/context/TaskContext";

export default function Home() {
  return (
    <TaskProvider>
      <Board />
    </TaskProvider>
  );
}
