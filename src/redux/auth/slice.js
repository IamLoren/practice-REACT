import { createSlice } from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, refreshThunk, registerThunk} from './operations'

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false
};
const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true
      })
      .addCase(refreshThunk.fulfilled, (state, {payload}) => {
        state.user = payload
        state.isLoggedIn = true
        state.isRefreshing = false
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false
      });
  },
});

export const authReducer = slice.reducer;
