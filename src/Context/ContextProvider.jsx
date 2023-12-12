import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const login = (username) => {
    if (username.trim().toLowerCase() === "admin") {
      setUser(username);
      toast.success("Yay, welcome, Admin!");
    } else {
      toast.error("User is not admin");
    }
  };

  const logout = () => {
    setUser("");
    toast.info("Goodbye my friend 😥");
  };

  const contextValue = { user, login, logout, isOnline: Boolean(user) };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
