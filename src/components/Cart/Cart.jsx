import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { styled } from "styled-components";

export const Cart = ({ content, cartCalc, deleteFromCart }) => {
  return (
    <>
      <h1>Total Price:{cartCalc()}$</h1>
      <ul>
        {content.map((product) => (
          <CartProduct>
            <img
              src={product.thumbnail}
              alt={product.title}
              width={100}
              height={80}
            />
            <p>Title: {product.title}</p>
            <p>Price: {product.price}$</p>

            <DeleteBtn type="button" onClick={() => deleteFromCart(product.id)}>
              <RiDeleteBin2Line size={20} />
            </DeleteBtn>
          </CartProduct>
        ))}
      </ul>
    </>
  );
};

const CartProduct = styled.li`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: red;
    transform: scale(1.3);
  }
`;