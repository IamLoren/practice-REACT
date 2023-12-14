import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/ContextProvider";

export const LoginForm = () => {
  const [userName, setUserName] = useState("");

  const { login } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userName);
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button type="submit">Login</button>
    </form>
  );
};
