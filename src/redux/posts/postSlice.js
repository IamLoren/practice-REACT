import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "1",
      title: "Nice day",
      body: "One destroyed mig, one happy life",
      author: "Alexsander Sergienko",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      state.items.push(payload);
    },

    deletePost: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export const postReducer = postsSlice.reducer;
