import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
const store = configureStore({
  reducer: { todoState: taskReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
