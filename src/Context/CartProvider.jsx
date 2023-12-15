import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const handleAddToCart = product => {
		setCart(prev => [...prev, {...product, count:1}])
	}
	const handleDeleteFromCart = id => {
		setCart(prev => prev.filter(el => el.id !== id))
	}

	const handleIncrement = (id) => {
		setCart(prev => prev.map(product =>
		{
			if(product.id === id) {
				return {...product, count: product.count + 1}
			}
			else {
				return product
			}
		}))
	}

	const handleDecrement = (id) => {
		setCart(prev => prev.map(product =>
		{
			if(product.id === id && product.count >= 2) {
				return {...product, count: product.count - 1}
			}
			else {
				return product
			}
		}))
	}

	const calculatePrice = () => cart.reduce((acc, product) => acc + product.price * product.count, 0)

	const value = {
		cart,
		handleAddToCart,
		handleDeleteFromCart,
		handleIncrement,
		handleDecrement,
		total: calculatePrice(),
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
