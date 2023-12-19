import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../../redux/tasks/selectors";
import { deleteTasks, toggleTasks } from "../../redux/tasks/slice";

export const DataList = () => {
  const dispatch = useDispatch();
  const handleDeleteItem = (id) => {
    dispatch(deleteTasks(id));
  };
  const tasks = useSelector(selectTasks);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              value={task.completed}
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
