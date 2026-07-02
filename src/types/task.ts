export type Task = {
  id: string;
  description: string;

  isDone: boolean;
};

export type actionType = "add" | "edit" | "toggle";
