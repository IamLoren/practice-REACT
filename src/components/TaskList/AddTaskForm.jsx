import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTasks } from "../../redux/tasks/slice";

export const AddTaskForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: nanoid(), complited: false, title: newTitle };
    dispatch(addTasks(newTask));
    setNewTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newTitle}
          onChange={(ev) => setNewTitle(ev.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};
