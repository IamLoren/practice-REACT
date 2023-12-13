import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const handleAddToCart = product => {
		setCart(prev => [...prev, product])
	}
	const handleDeleteFromCart = id => {
		setCart(prev => prev.filter(el => el.id !== id))
	}
	const calculatePrice = () => cart.reduce((acc, product) => acc + product.price, 0)

	const value = {
		cart,
		handleAddToCart,
		handleDeleteFromCart,
		total: calculatePrice(),
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
