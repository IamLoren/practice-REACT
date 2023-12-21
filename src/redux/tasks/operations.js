import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCurrentTask } from "./slice";

axios.defaults.baseURL = "https://6580bf4d3dfdd1b11c42098a.mockapi.io";

export const fetchTasksThunk = createAsyncThunk(
  "tasks/fatchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("tasks");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTaskThunk = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`tasks/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTaskThunk = createAsyncThunk(
  "tasks/addTask",
  async (title, thunkAPI) => {
    try {
      const { data } = await axios.post("tasks", { title });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toogleTasksThunk = createAsyncThunk(
  "toogleTasks",
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.put(`tasks/${task.id}`, {
        ...task,
        completed: !task.completed,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const renameTaskThunk = createAsyncThunk(
  "renameTask",
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.put(`tasks/${task.id}`, task);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
