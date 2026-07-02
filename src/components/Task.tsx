import { useState } from "react";
import type { Task as TaskType } from "../types/task";
import { useAppDispatch } from "../hooks";

function Task({ task }: { task: TaskType }) {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.description);

  const handleToggle = () => {
    dispatch({ type: "toggle", payload: task });
  };

  const saveEdit = () => {
    const trimmed = editedText.trim();
    if (!trimmed) return;
    dispatch({ type: "edit", payload: { ...task, description: trimmed } });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.isDone ? "done" : ""}`}>
      <button
        type="button"
        className={`task-toggle ${task.isDone ? "done" : ""}`}
        onClick={handleToggle}
        title="toggle"
      >
        {task.isDone ? "✓" : "○"}
      </button>

      {isEditing ? (
        <input
          value={editedText}
          placeholder="Edit task"
          aria-label="Edit task"
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit();
            if (e.key === "Escape") {
              setIsEditing(false);
              setEditedText(task.description);
            }
          }}
        />
      ) : (
        <span className="task-text">{task.description}</span>
      )}

      {isEditing ? (
        <>
          <button type="button" onClick={saveEdit} className="task-save">
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setEditedText(task.description);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </li>
  );
}

export default Task;
