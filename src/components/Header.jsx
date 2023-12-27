import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux/auth/operations";
import { selectisLoggedIn } from "../redux/auth/selectors";

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectisLoggedIn)

  return (
    <StyledBox>
      <div>Header</div>
      <div>
        {!isLoggedIn && <>
          <NavLink to='/register'>Registration</NavLink>
          <NavLink style={{marginLeft: '5px'}} to='/login'>Login</NavLink>
        </>}
        {isLoggedIn&&<><button onClick={()=> dispatch(logoutThunk())}>Logout</button></>}     
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink style={{marginLeft: '5px'}} to="/todos">ToDo</NavLink>
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
