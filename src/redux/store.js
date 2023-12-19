import { combineReducers } from "redux";
import { taskReducer } from "./tasks/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["filter"],
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

export const store = configureStore({
  reducer: { taskData: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
