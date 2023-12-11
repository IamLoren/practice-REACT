import React, { Component } from 'react'
import { Products } from './components/Products/Products.jsx'
import { fetchProduct } from './components/Services/api.js'
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import { Loader } from './components/Loader/Loader.jsx'
import { Modal } from './components/Modal/Modal.jsx'
import { Header } from './components/Header/Header.jsx'
import styled from 'styled-components'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { Cart } from './components/Cart/Cart.jsx'
//Plan
// 1. Refactoring to hooks
// 2. Використати useState()
// 3. Використати useEffect()

export class App extends Component {
	state = {
		productsData: [],
		skip: 0,
		loading: false,
		total: 0,
		isCartOpen: false,
		cartContent: [],
	}

	myRef = React.createRef()

	getSnapshotBeforeUpdate(prevProps, prevState) {
		if (prevState.productsData.length !== this.state.productsData.length) {
			const scrollPosition = this.myRef.current.offsetTop
			console.log(scrollPosition)
			return { scrollPosition }
		}
		return null
	}

	async componentDidMount() {
		const { products, total } = await fetchProduct({
			limit: 10,
		})
		this.setState({ productsData: products, total })
	}

	async componentDidUpdate(_, prevState, snapshot) {
		if (snapshot && prevState.productsData.length) {
			console.log(snapshot)
			const scrollPosition = this.myRef.current.offsetTop
			window.scrollTo({
				top: scrollPosition - 1000,
				behavior: 'smooth',
			})
		}
		if (prevState.skip !== this.state.skip) {
			try {
				this.setState({ loading: true })
				const { products } = await fetchProduct({
					limit: 10,
					skip: this.state.skip,
				})
				this.setState({
					productsData: [...prevState.productsData, ...products],
				})
			} catch (error) {
			} finally {
				this.setState({ loading: false })
			}
		}
	}

	handleLoadMore = () => {
		this.setState(prevState => ({ skip: prevState.skip + 10 }))
	}

	handleAddToCart = product => {
		this.setState(prevState => ({
			cartContent: [...prevState.cartContent, product],
		}))
	}
	handleDeleteFromCart = id => {
		// this.setState((prevState) => {
		//   const id = product.id;
		//   const { cartContent } = prevState;
		//   return {
		//     cartContent: cartContent.filter((product) => product.id !== id),
		//   };
		// });
		this.setState(prevState => ({
			cartContent: prevState.cartContent.filter(product => product.id !== id),
		}))
	}

	handleCartToggle = () => {
		this.setState(prevState => ({ isCartOpen: !prevState.isCartOpen }))
	}
	calculatePrice = () => this.state.cartContent.reduce((acc, product) => (acc += product.price), 0)
	render() {
		return (
			<div>
				<Header onCartClick={this.handleCartToggle} />
				<Products products={this.state.productsData} onAddToCart={this.handleAddToCart} />
				{this.state.total > this.state.productsData.length ? <LoadMoreBtn click={this.handleLoadMore} /> : null}

				<div style={{ visibility: 'hidden' }} ref={this.myRef}></div>
				{this.state.loading ? <Loader /> : null}
				{this.state.isCartOpen ? (
					<Modal handleCloseModal={this.handleCartToggle}>
						{this.state.cartContent?.length ? (
							<Cart
								content={this.state.cartContent}
								cartCalc={this.calculatePrice}
								deleteFromCart={this.handleDeleteFromCart}
							/>
						) : (
							<h1>Your cart is empty😥 </h1>
						)}
					</Modal>
				) : null}
			</div>
		)
	}
}
