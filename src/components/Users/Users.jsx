import React from "react";
import { SingleUser } from "../SingleUser/SingleUser";

export const Users = ({ usersInfo, delUser, handleChangeStatus, handleShowModal }) => {
  return (
    <>
      <ul>
        {usersInfo.map((item) => (
          <SingleUser
            key={item.id}
            {...item}
            delUser={delUser}
            handleChangeStatus={handleChangeStatus}
            handleShowModal={handleShowModal}
          />
        ))}
      </ul>
    </>
  );
};
