import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectTasks } from "../../redux/tasks/selectors";
import { toggleTasks } from "../../redux/tasks/slice";
import { deleteTaskThunk } from "../../redux/tasks/operations";

export const DataList = () => {
  const dispatch = useDispatch();
  const handleDeleteItem = (id) => {
    dispatch(deleteTaskThunk(id));
  };

  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const getFiltered = () => {
    switch (filter) {
      case "active":
        return tasks.filter((item) => !item.completed);
      case "completed":
        return tasks.filter((item) => item.completed);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <ul>
        {getFiltered().map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTasks(task.id))}
            />
            {task.title}
            <button onClick={() => handleDeleteItem(task.id)}>Delette</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
