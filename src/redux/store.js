import { authorReducer } from "./posts/authorSlice";
import { postReducer } from "./posts/postSlice";
import { taskReducer } from "./tasks/slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { taskData: taskReducer, posts: postReducer, author: authorReducer },
});
