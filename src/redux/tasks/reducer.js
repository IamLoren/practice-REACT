import { actionTypes } from "./actionTypes";

const initialState = {
  tasks: [{ id: "1", title: "Redux", completed: true }],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.deleteTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case actionTypes.addTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    default:
      return state;
  }
};
