import { useState } from "react";
import type { Task } from "../types/task";
import { useDispatch } from "react-redux";

function AddTask() {
  const [task, setTask] = useState<Task>({
    id: "",
    description: "",
    isDone: false,
  });
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleAddTask = () => {
    if (!task.description.trim()) return;

    dispatch({
      type: "add",
      payload: {
        ...task,
        id: Date.now().toString(),
        description: task.description.trim(),
      },
    });
    setTask({ id: "", description: "", isDone: false });
  };

  return (
    <div className="todo-form-card">
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <input
          type="text"
          className="todo-input"
          onChange={handleInputChange}
          name="description"
          title="description"
          value={task.description}
          placeholder="What needs to be done?"
        />
        <button type="submit" className="todo-button">
          Add task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
