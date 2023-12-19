import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { taskReducer } from "./tasks/slice";

const devtools = devToolsEnhancer();

const rootReducer = combineReducers({
  taskData: taskReducer,
});

export const store = createStore(rootReducer, devtools);
