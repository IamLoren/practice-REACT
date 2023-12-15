import React, {useContext} from "react";
import {RiDeleteBin2Line} from "react-icons/ri";
import {CartContext} from "../../Context/CartProvider";
import {CartProduct, DeleteBtn} from "./Cart.styled";

const Cart = () => {
  const {cart, total, handleDeleteFromCart, handleIncrement, handleDecrement} = useContext(CartContext);
  return (
    <>
      <h1>Total Price:{total}$</h1>
      <ul>
        {cart.map((product) => (
          <CartProduct key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              width={100}
              height={80}
            />
            <p>Title: {product.title}</p>
            <p>Price: {product.price}$</p>
            <div>
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <span>{product.count}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
            </div>

            <DeleteBtn
              type="button"
              onClick={() => handleDeleteFromCart(product.id)}
            >
              <RiDeleteBin2Line size={20}/>
            </DeleteBtn>
          </CartProduct>
        ))}
      </ul>
    </>
  );
};

export default Cart;