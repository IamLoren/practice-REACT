import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectTasks } from "../../redux/tasks/selectors";
import { deleteTaskThunk, renameTaskThunk, toogleTasksThunk } from "../../redux/tasks/operations";

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

  const handleRename = (task) => {
    const updatedTask = { ...task, title: prompt('Enter new value') || task.title }
    dispatch(renameTaskThunk(updatedTask)) 
  }
  return (
    <div>
      <ul>
        {getFiltered().map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toogleTasksThunk(task))}
            />
            <p onClick={()=>handleRename(task)}>{task.title}</p>
            <button onClick={() => handleDeleteItem(task.id)}>Delette</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
