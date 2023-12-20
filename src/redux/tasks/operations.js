import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
