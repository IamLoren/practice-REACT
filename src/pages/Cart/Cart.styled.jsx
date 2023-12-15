import {styled} from "styled-components";

export const CartProduct = styled.li`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  
  div{
    display: flex;
    gap: 3px;
    
    button {
      background-color: sandybrown;
      font-size: 20px;
      font-weight: 500;
      border:none;
    }
  }
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: red;
    transform: scale(1.3);
  }
`;
