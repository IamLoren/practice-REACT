import React from "react";

export const SingleUser = ({
  id,
  name,
  salary,
  position,
  status,
  delUser,
  handleChangeStatus,
}) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{salary}</p>
        <p>{position}</p>
        <p>status: {status}</p>
      </div>
      <button type="button" onClick={() => delUser(id)}>
        delete
      </button>
      <button onClick={() => handleChangeStatus(id)}>change status</button>
    </li>
  );
};
