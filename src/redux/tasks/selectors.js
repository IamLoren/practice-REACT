import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.taskData.tasks;
export const selectFilter = (state) => state.taskData.filter;
export const selectIsLoading = (state) => state.taskData.isLoading;
export const selectError = (state) => state.taskData.error;

export const selectFilteredTasks = createSelector(
  [selectFilter, selectTasks],
  (filter, tasks) => {
    console.log("Filter");
    switch (filter) {
      case "active":
        return tasks.filter((item) => !item.completed);
      case "completed":
        return tasks.filter((item) => item.completed);
      default:
        return tasks;
    }
  }
);

// export const selectFilteredTasks = (state) => {
//   const filter = selectFilter(state);
//   const tasks = selectTasks(state);
//   switch (filter) {
//     case "active":
//       return tasks.filter((item) => !item.completed);
//     case "completed":
//       return tasks.filter((item) => item.completed);
//     default:
//       return tasks;
//   }
// };
