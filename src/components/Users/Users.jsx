import React from "react";
import { SingleUser } from "../SingleUser/SingleUser";

export const Users = ({ usersInfo, delUser }) => {
  return (
    <>
      <ul>
        {usersInfo.map((item) => (
          <SingleUser key={item.id} {...item} delUser={delUser} />
        ))}
      </ul>
    </>
  );
};
