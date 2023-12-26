import { authReducer } from "./auth/slice";
import { postReducer } from "./posts/postSlice";
import { taskReducer } from "./tasks/slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { taskData: taskReducer, posts: postReducer, auth: authReducer },
});
