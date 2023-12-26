import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logoutThunk, registerThunk } from "../redux/auth/operations";
import { selectisLoggedIn } from "../redux/auth/selectors";

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectisLoggedIn)

  const handleRegister = () => {
    dispatch(registerThunk({
      name: "Adrian Cross",
      email: "acrosssdfsfs12@mail.com",
      password: "examplepdsdfghdwd12345"
}))
  }
  const handleLogin = () => {
    dispatch(loginThunk({
      name: "Adrian Cross",
      email: "acrosssdfsfs12@mail.com",
      password: "examplepdsdfghdwd12345"
}))
  }


  return (
    <StyledBox>
      <div>Header</div>
      <div>
        {!isLoggedIn && <>
          <button onClick={handleRegister}>Registration</button>
          <button onClick={handleLogin}>Login</button>
        </>}
        {isLoggedIn&&<><button onClick={()=> dispatch(logoutThunk())}>Logout</button></>}     
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todos">ToDo</NavLink>
      </nav>
    </StyledBox>
  );
};

export default Header;

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: teal;
`;
