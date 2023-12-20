import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { nanoid } from "nanoid";
import { addTaskThunk } from "../../redux/tasks/operations";

export const AddTaskForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTaskThunk(newTitle));
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
