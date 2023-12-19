import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: "1", title: "Redux", completed: true }],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTasks: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload);
      task.completed = !task.completed;
    },
  },
});

export const { deleteTasks, addTasks, toggleTasks } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
