import { actionTypes } from "./actionTypes";

export const deleteTask = (id) => {
  return { type: actionTypes.deleteTask, payload: id };
};
