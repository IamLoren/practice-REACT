import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: "",
  isOnline: false,
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.author = payload;
      state.isOnline = true;
    },
    logout: (state) => {
      state.isOnline = false;
      state.author = "";
    },
  },
});

export const { login, logout } = authorSlice.actions;
export const authorReducer = authorSlice.reducer;
