import { useAppSelector } from "./hooks";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";
import { useState } from "react";

function App() {
  const tasks = useAppSelector((state) => state.todoState.tasks);
  const [filter, setFilter] = useState<"all" | "finished" | "unfinished">(
    "all",
  );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "finished") return task.isDone;
    if (filter === "unfinished") return !task.isDone;
    return true;
  });

  return (
    <main className="app-shell">
      <section className="todo-card">
        <div className="todo-header">
          <p className="eyebrow">Redux Todo</p>
          <h1>Stay on top of your day</h1>
          <p className="subtitle">Add tasks and keep your plan simple.</p>
        </div>

        <AddTask />

        <div className="task-list">
          <div className="task-list-top">
            <h3>My Tasks</h3>
            <p className="task-filter-hint">Filter by task state</p>
          </div>

          <div className="filter-row">
            <label className="filter-chip">
              <input
                type="radio"
                name="filter"
                id="finished"
                title="filterTasks"
                checked={filter === "finished"}
                onChange={() => setFilter("finished")}
              />
              <span>Finished</span>
            </label>
            <label className="filter-chip">
              <input
                type="radio"
                name="filter"
                id="unfinished"
                title="filterTasks"
                checked={filter === "unfinished"}
                onChange={() => setFilter("unfinished")}
              />
              <span>Unfinished</span>
            </label>
          </div>

          {tasks.length > 0 ? (
            <TaskCard tasks={filteredTasks} />
          ) : (
            <p className="empty-state">No tasks yet! Add one above.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
