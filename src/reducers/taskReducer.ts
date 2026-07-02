import type { actionType, Task } from "../types/task";

const initialState = {
  tasks: [] as Task[],
};

function taskReducer(
  state = initialState,
  action: { type: actionType; payload: Task },
) {
  switch (action.type) {
    case "add":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "toggle":
      return {
        state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, isDone: !task.isDone };
          }
          return task;
        }),
      };

    case "edit":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task,
        ),
      };
    default:
      return state;
  }
}

export default taskReducer;
