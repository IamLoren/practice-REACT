import { useContext } from 'react'
import { Card } from '../Card/Card'
import { StyledCard } from './Product.styled'
import { CartContext } from '../../Context/CartProvider'

export const Products = ({ products = [] }) => {
	const { handleAddToCart } = useContext(CartContext)

	return (
		<div>
			<StyledCard>
				{products.map(item => (
					<Card {...item} key={item.id} onAddToCart={() => handleAddToCart(item)} />
				))}
			</StyledCard>
		</div>
	)
}
