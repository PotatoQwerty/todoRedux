import { useState } from "react";
function TaskCard({
  tasks,
}: {
  tasks: { id: string; description: string; isDone: boolean }[];
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  return (
    <ul className="task-list-items">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.isDone ? "done" : ""}`}>
          <span className="task-text">{task.description}</span>
          <button
            type="button"
            className={`task-toggle ${task.isDone ? "done" : ""}`}
          >
            {task.isDone ? "✓" : "○"}
          </button>
          <button>Edit Task</button>
          {isEditing && <input type="text" placeholder="Edit task" />}
        </li>
      ))}
    </ul>
  );
}

export default TaskCard;
