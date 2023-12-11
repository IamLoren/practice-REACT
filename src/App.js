import React, { Component, useCallback, useEffect, useState } from "react";
import { Products } from "./components/Products/Products.jsx";
import { fetchProduct } from "./components/services/api.js";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { Header } from "./components/Header/Header.jsx";
import styled from "styled-components";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Cart } from "./components/Cart/Cart.jsx";
//Plan
// 1. Refactoring to hooks
// 2. Використати useState()
// 3. Використати useEffect()

export const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartContent, setCartContent] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        // this.setState({ loading: true })
        const { products, total } = await fetchProduct({
          limit: 10,
          skip,
          // skip: this.state.skip,
        });
        setProductsData((prevState) => [...prevState, ...products]);
        setTotal(total);
        // this.setState({
        // 	productsData: [...prevState.productsData, ...products],
        // })
      } catch (error) {
      } finally {
        setLoading(false);
        // this.setState({ loading: false })
      }
    };
    getData();
  }, [skip]);

  // 	state = {
  // 		productsData: [],
  // 		skip: 0,
  // 		loading: false,
  // 		total: 0,
  // 		isCartOpen: false,
  // 		cartContent: [],
  // 	}
  const handleLoadMore = () => {
    setSkip((prevState) => prevState + 10);
    // this.setState(prevState => ({ skip: prevState.skip + 10 }))
  };

  const handleAddToCart = (product) => {
    setCartContent((prevState) => [...prevState, product]);
    // this.setState(prevState => ({
    // 	cartContent: [...prevState.cartContent, product],
    // }))
  };
  const handleDeleteFromCart = (id) => {
    setCartContent((prevState) =>
      prevState.filter((product) => product.id !== id)
    );
    // this.setState(prevState => ({
    // 	cartContent: prevState.cartContent.filter(product => product.id !== id),
    // }))
  };

  const handleCartToggle = () => {
    setIsCartOpen((prevState) => !prevState);
    // this.setState(prevState => ({ isCartOpen: !prevState.isCartOpen }))
  };

  const calculatePrice = () =>
    cartContent.reduce((acc, product) => (acc += product.price), 0);
  return (
    <div>
      <Header onCartClick={handleCartToggle} />
      <Products products={productsData} onAddToCart={handleAddToCart} />
      {total > productsData.length ? (
        <LoadMoreBtn click={handleLoadMore} />
      ) : null}

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

// export class App extends Component {
// 	state = {
// 		productsData: [],
// 		skip: 0,
// 		loading: false,
// 		total: 0,
// 		isCartOpen: false,
// 		cartContent: [],
// 	}

// 	myRef = React.createRef()

// 	getSnapshotBeforeUpdate(prevProps, prevState) {
// 		if (prevState.productsData.length !== this.state.productsData.length) {
// 			const scrollPosition = this.myRef.current.offsetTop
// 			console.log(scrollPosition)
// 			return { scrollPosition }
// 		}
// 		return null
// 	}

// 	async componentDidMount() {
// 		const { products, total } = await fetchProduct({
// 			limit: 10,
// 		})
// 		this.setState({ productsData: products, total })
// 	}

// 	async componentDidUpdate(_, prevState, snapshot) {
//
// 		if (prevState.skip !== this.state.skip) {
// 			try {
// 				this.setState({ loading: true })
// 				const { products } = await fetchProduct({
// 					limit: 10,
// 					skip: this.state.skip,
// 				})
// 				this.setState({
// 					productsData: [...prevState.productsData, ...products],
// 				})
// 			} catch (error) {
// 			} finally {
// 				this.setState({ loading: false })
// 			}
// 		}
// 	}

// 	handleLoadMore = () => {
// 		this.setState(prevState => ({ skip: prevState.skip + 10 }))
// 	}

// 	handleAddToCart = product => {
// 		this.setState(prevState => ({
// 			cartContent: [...prevState.cartContent, product],
// 		}))
// 	}
// 	handleDeleteFromCart = id => {
// 		// this.setState((prevState) => {
// 		//   const id = product.id;
// 		//   const { cartContent } = prevState;
// 		//   return {
// 		//     cartContent: cartContent.filter((product) => product.id !== id),
// 		//   };
// 		// });
// 		this.setState(prevState => ({
// 			cartContent: prevState.cartContent.filter(product => product.id !== id),
// 		}))
// 	}

// 	handleCartToggle = () => {
// 		this.setState(prevState => ({ isCartOpen: !prevState.isCartOpen }))
// 	}
// 	calculatePrice = () => this.state.cartContent.reduce((acc, product) => (acc += product.price), 0)
// 	render() {
// 		return (
// 			<div>
// 				<Header onCartClick={this.handleCartToggle} />
// 				<Products products={this.state.productsData} onAddToCart={this.handleAddToCart} />
// 				{this.state.total > this.state.productsData.length ? <LoadMoreBtn click={this.handleLoadMore} /> : null}

// 				<div style={{ visibility: 'hidden' }} ref={this.myRef}></div>
// 				{this.state.loading ? <Loader /> : null}
// 				{this.state.isCartOpen ? (
// 					<Modal handleCloseModal={this.handleCartToggle}>
// 						{this.state.cartContent?.length ? (
// 							<Cart
// 								content={this.state.cartContent}
// 								cartCalc={this.calculatePrice}
// 								deleteFromCart={this.handleDeleteFromCart}
// 							/>
// 						) : (
// 							<h1>Your cart is empty😥 </h1>
// 						)}
// 					</Modal>
// 				) : null}
// 			</div>
// 		)
// 	}
// }
