import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledBox>
      <div>Header</div>
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
