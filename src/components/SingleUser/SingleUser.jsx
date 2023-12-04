import React from "react";

export const SingleUser = ({ id, name, salary, position, delUser }) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{salary}</p>
        <p>{position}</p>
      </div>
      <button type="button" onClick={() => delUser(id)}>delete</button>
    </li>
  );
};
