import { authReducer } from "./auth/slice";
import { postReducer } from "./posts/postSlice";
import { taskReducer } from "./tasks/slice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig= {
  key: 'token',
  version: 1,
  storage,
  whitelist:['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: { taskData: taskReducer, posts: postReducer, auth: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store)
