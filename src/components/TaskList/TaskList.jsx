import React from "react";
import { AddTaskForm } from "./AddTaskForm";
import { FilterTask } from "./FilterTask";
import { DataList } from "./DataList";
import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectUncompliteTasks,
} from "../../redux/tasks/selectors";

export const TaskList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const uncomplited = useSelector(selectUncompliteTasks);
  return (
    <div>
      <AddTaskForm />
      <FilterTask />
      <p>You have to complite {uncomplited} tasks.</p>
      <DataList />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
