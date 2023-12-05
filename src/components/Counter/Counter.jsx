import React from "react";

export const Counter = ({ countOfWorkers }) => {
  return (
    <>
      <p>Currently on work:</p>
      <span>{countOfWorkers}</span>
    </>
  );
};
