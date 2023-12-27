import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.taskData.tasks;
export const selectFilter = (state) => state.taskData.filter;
export const selectIsLoading = (state) => state.taskData.isLoading;
export const selectError = (state) => state.taskData.error;
export const selectCurrent = (state) => state.taskData.currentTask;

export const selectFilteredTasks = createSelector(
  [selectFilter, selectTasks],
  (filter, tasks) => {
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

export const selectUncompliteTasks = createSelector([selectTasks], (tasks) => {
  return tasks.reduce((acc, task) => (!task.completed ? acc + 1 : acc), 0);
});
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
