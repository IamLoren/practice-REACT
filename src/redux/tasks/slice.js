import { createSlice } from "@reduxjs/toolkit";
import {
  addTaskThunk,
  deleteTaskThunk,
  fetchTasksThunk,
  renameTaskThunk,
  toogleTasksThunk,
} from "./operations";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasksThunk.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
      })
      .addCase(fetchTasksThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteTaskThunk.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter((task) => task.id !== payload.id);
      })
      .addCase(addTaskThunk.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
      })
      .addCase(toogleTasksThunk.fulfilled, (state, { payload }) => {
        const task = state.tasks.find((item) => item.id === payload.id);
        task.completed = !task.completed;
      })
      .addCase(renameTaskThunk.fulfilled, (state, { payload }) => {
        const taskIndex = state.tasks.findIndex(
          (item) => item.id === payload.id
        );
        state.tasks.splice(taskIndex, 1, payload);
      });
  },

  reducers: {
    filterTask: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterTask } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
