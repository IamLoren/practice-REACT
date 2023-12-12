import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { Products } from './components/Products/Products.jsx'
import { fetchProduct } from './Services/api.js'
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import { Loader } from './components/Loader/Loader.jsx'
import { Modal } from './components/Modal/Modal.jsx'
import { Header } from './components/Header/Header.jsx'
import { Cart } from './components/Cart/Cart.jsx'
import { MyContext } from './Context/ContextProvider.jsx'
import { LoginForm } from './components/LoginForm/LoginForm.jsx'
import { initialState, productReducer } from './reducer/productReducer.js'
//Plan
// 1. Додати в проект BrowserRouter
// 2. Створити папку pages
// 3. Створити компонент Products та Cart в папці Pages. Перенести відповідний код туди
// 4. Створити Navbar, Layout
// 5. Додати маршрути та заглушку на 404. А також використати Navigate для редіректу

export const App = () => {
	const [state, dispatch] = useReducer(productReducer, initialState)
	const { productsData, skip, loading, total, isCartOpen, cartContent } = state

	const getData = useCallback(async () => {
		try {
			dispatch({ type: 'SET_LOADING', payload: true })
			const { products, total } = await fetchProduct({
				limit: 10,
				skip,
			})

			dispatch({ type: 'FETCH_PRODUCT_DATA', payload: { products, total } })
		} catch (error) {
		} finally {
			dispatch({ type: 'SET_LOADING', payload: false })
		}
	}, [skip])

	useEffect(() => {
		getData()
	}, [getData, skip])

	const { isOnline } = useContext(MyContext)

	const handleLoadMore = () => {
		dispatch({ type: 'SET_SKIP' })
	}

	const handleAddToCart = product => {
		dispatch({ type: 'ADD_TO_CART', payload: product })
	}
	const handleDeleteFromCart = id => {
		dispatch({ type: 'DELETE_FROM_CART', payload: id })
	}

	const handleCartToggle = () => {
		dispatch({ type: 'TOGGLE_CART' })
	}

	const calculatePrice = () => cartContent.reduce((acc, product) => acc + product.price, 0)
	return (
		<div>
			<Header onCartClick={handleCartToggle} />
			{isOnline ? (
				<>
					<Products products={productsData} onAddToCart={handleAddToCart} />
					{total > productsData.length ? <LoadMoreBtn click={handleLoadMore} /> : null}
				</>
			) : (
				<LoginForm />
			)}

			{loading ? <Loader /> : null}
			{isCartOpen ? (
				<Modal handleCloseModal={handleCartToggle}>
					{cartContent?.length ? (
						<Cart content={cartContent} cartCalc={calculatePrice} deleteFromCart={handleDeleteFromCart} />
					) : (
						<h1>Your cart is empty😥 </h1>
					)}
				</Modal>
			) : null}
		</div>
	)
}
