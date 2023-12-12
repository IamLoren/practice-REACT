import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { MyContext } from "../../Context/ContextProvider";

export const Header = ({ onCartClick }) => {
  const { user, logout, isOnline } = useContext(MyContext);

  return (
    <StyledHeader>
      <h2>Extra Practice</h2>
      <button onClick={onCartClick} aria-label="Open Cart">
        <StyledCartIcon size={40} />
      </button>

      {isOnline ? (
        <>
          <p>Current User: {user}</p>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      ) : null}
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  padding: 20px 20px;
  background-color: orange;
  font-weight: 700;
  font-style: italic;
  display: flex;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
  }
`;

const StyledCartIcon = styled(AiOutlineShoppingCart)`
  transition: color 250ms ease-in-out;
  color: darkgreen;

  &:hover,
  &:focus {
    color: greenyellow;
  }
`;
