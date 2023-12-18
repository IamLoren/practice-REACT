import { actionTypes } from "./actionTypes";

export const deleteTask = (id) => {
  return { type: actionTypes.deleteTask, payload: id };
};

export const addTask = (task) => {
  return { type: actionTypes.addTask, payload: task }
}