import React, {Component, useCallback, useContext, useEffect, useReducer, useState} from 'react'
import {Products} from './components/Products/Products.jsx'
import {fetchProduct} from './Services/api.js'
import {LoadMoreBtn} from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import {Loader} from './components/Loader/Loader.jsx'
import {Modal} from './components/Modal/Modal.jsx'
import {Header} from './components/Header/Header.jsx'
import styled from 'styled-components'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {Cart} from './components/Cart/Cart.jsx'
import {MyContext} from './Context/ContextProvider.jsx'
import {LoginForm} from './components/LoginForm/LoginForm.jsx'
import {initialState, productReducer} from './reducer/productReducer.js'
//Plan
// 1. Refactoring to hooks
// 2. Використати useState()
// 3. Використати useEffect()
// 4. useCallback()
// 5. useReducer()

export const App = () => {
    // const [productsData, setProductsData] = useState([])
    // const [skip, setSkip] = useState(0)
    // const [loading, setLoading] = useState(false)
    // const [total, setTotal] = useState(0)
    // const [isCartOpen, setIsCartOpen] = useState(false)
    // const [cartContent, setCartContent] = useState([])

    const [state, dispatch] = useReducer(productReducer, initialState)
    const {productsData, skip, loading, total, isCartOpen, cartContent} = state

    const getData = useCallback(async () => {
        try {
            dispatch({type: 'SET_LOADING', payload: true})
            // setLoading(true)

            const {products, total} = await fetchProduct({
                limit: 10,
                skip,
            })

            dispatch({type: 'FETCH_PRODUCT_DATA', payload: {products, total}})
            // setProductsData(prevState => [...prevState, ...products])
            // setTotal(total)
        } catch (error) {
        } finally {
            dispatch({type: 'SET_LOADING', payload: false})
            // setLoading(false)
        }
    }, [skip])

    useEffect(() => {
        getData()
    }, [getData, skip])

    const {isOnline} = useContext(MyContext)

    const handleLoadMore = () => {
        dispatch({type: 'SET_SKIP'})
        // setSkip(prevState => prevState + 10)
    }

    const handleAddToCart = product => {
        dispatch({type: 'ADD_TO_CART', payload: product})
        // setCartContent(prevState => [...prevState, product])
    }
    const handleDeleteFromCart = id => {
        dispatch({type: 'DELETE_FROM_CART', payload: id})
        // setCartContent(prevState => prevState.filter(product => product.id !== id))
    }

    const handleCartToggle = () => {
        dispatch({type: 'TOGGLE_CART'})
        // setIsCartOpen(prevState => !prevState)
    }

    const calculatePrice = () => cartContent.reduce((acc, product) => (acc + product.price), 0)
    return (
        <div>
            <Header onCartClick={handleCartToggle}/>
            {isOnline ? (
                <>
                    <Products products={productsData} onAddToCart={handleAddToCart}/>
                    {total > productsData.length ? <LoadMoreBtn click={handleLoadMore}/> : null}
                </>
            ) : (
                <LoginForm/>
            )}

            {loading ? <Loader/> : null}
            {isCartOpen ? (
                <Modal handleCloseModal={handleCartToggle}>
                    {cartContent?.length ? (
                        <Cart content={cartContent} cartCalc={calculatePrice} deleteFromCart={handleDeleteFromCart}/>
                    ) : (
                        <h1>Your cart is empty😥 </h1>
                    )}
                </Modal>
            ) : null}
        </div>
    )
}
