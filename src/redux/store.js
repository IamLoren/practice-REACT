import { combineReducers, createStore } from "redux";
import { taskReducer } from "./tasks/reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const devtools = devToolsEnhancer();

const rootReducer = combineReducers({
  taskData: taskReducer,
});

export const store = createStore(rootReducer, devtools);
