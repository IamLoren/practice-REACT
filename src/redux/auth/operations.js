import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/api";
import axios from 'axios'

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await api.post("/users/signup", user);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await api.post("/users/login", user);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await api.post("/users/logout");
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token
    if(!token) {
      return thunkAPI.rejectWithValue('error')
    }
    setToken(token)
    try {
      const {data} = await api.get('/users/me')
      return data
    }
    catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
