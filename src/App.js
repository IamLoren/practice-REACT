import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Products } from "./components/Products/Products.jsx";
import { fetchProduct } from "./Services/api.js";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { Header } from "./components/Header/Header.jsx";
import styled from "styled-components";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Cart } from "./components/Cart/Cart.jsx";
import { MyContext } from "./Context/ContextProvider.jsx";
import { LoginForm } from "./components/LoginForm/LoginForm.jsx";
//Plan
// 1. Refactoring to hooks
// 2. Використати useState()
// 3. Використати useEffect()
// 4. useCallback()
// 5. useReducer()

export const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartContent, setCartContent] = useState([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const { products, total } = await fetchProduct({
        limit: 10,
        skip,
      });
      setProductsData((prevState) => [...prevState, ...products]);
      setTotal(total);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [skip]);

  useEffect(() => {
    getData();
  }, [getData, skip]);

  const { isOnline } = useContext(MyContext);

  const handleLoadMore = () => {
    setSkip((prevState) => prevState + 10);
  };

  const handleAddToCart = (product) => {
    setCartContent((prevState) => [...prevState, product]);
  };
  const handleDeleteFromCart = (id) => {
    setCartContent((prevState) =>
      prevState.filter((product) => product.id !== id)
    );
  };

  const handleCartToggle = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const calculatePrice = () =>
    cartContent.reduce((acc, product) => (acc += product.price), 0);
  return (
    <div>
      <Header onCartClick={handleCartToggle} />
      {isOnline ? (
        <>
          <Products products={productsData} onAddToCart={handleAddToCart} />
          {total > productsData.length ? (
            <LoadMoreBtn click={handleLoadMore} />
          ) : null}
        </>
      ) : (
        <LoginForm />
      )}

      {loading ? <Loader /> : null}
      {isCartOpen ? (
        <Modal handleCloseModal={handleCartToggle}>
          {cartContent?.length ? (
            <Cart
              content={cartContent}
              cartCalc={calculatePrice}
              deleteFromCart={handleDeleteFromCart}
            />
          ) : (
            <h1>Your cart is empty😥 </h1>
          )}
        </Modal>
      ) : null}
    </div>
  );
};
