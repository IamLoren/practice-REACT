import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { fetchProduct } from '../Services/api'
import { initialState, productReducer } from '../reducer/productReducer'
import { MyContext } from '../Context/ContextProvider'
import { Header } from '../components/Header/Header'
import { LoadMoreBtn } from '../components/LoadMoreBtn/LoadMoreBtn'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { Loader } from '../components/Loader/Loader'
import { CartContext } from '../Context/CartProvider'
import { Products } from '../components/Products/Products'

const ProductsPage = () => {
	const [state, dispatch] = useReducer(productReducer, initialState)
	const { productsData, skip, loading, total } = state

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

	return (
		<div>
			<Products products={productsData} />
			{total > productsData.length ? <LoadMoreBtn click={handleLoadMore} /> : null}

			{loading ? <Loader /> : null}
		</div>
	)
}

export default ProductsPage
