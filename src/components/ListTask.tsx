import Task from "./Task";
import type { Task as TaskType } from "../types/task";

function ListTask({ tasks }: { tasks: TaskType[] }) {
  return (
    <ul className="task-list-items">
      {tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
    </ul>
  );
}

export default ListTask;
