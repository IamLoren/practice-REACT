import React from "react";
import { useSelector } from "react-redux";

export const DataList = () => {
  const tasks = useSelector((state) => state.taskData.tasks);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" />
            {task.title}
            <button>Delette</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
