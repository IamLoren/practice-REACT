import React from "react";

export const SingleUser = ({ name, salary }) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{salary}</p>
      </div>
      <button type="button">delete</button>
    </li>
  );
};
