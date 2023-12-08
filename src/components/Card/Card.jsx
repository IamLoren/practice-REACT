import styled from 'styled-components'

export const Card = ({ title, description, price, thumbnail, onAddToCart }) => {
	return (
		<StyledCard>
			<img src={thumbnail} alt='Title' width='300' />
			<h2>{title}</h2>
			<p>{description}</p>
			<b>{price}$</b>
			<button onClick={ onAddToCart}>Add to Cart</button>
		</StyledCard>
	)
}

const StyledCard = styled.li`
  border: 1px solid black;
  padding: 4px 10px;
  box-shadow: 2px 2px 4px 2px gray;

  img {
    height: 200px;
    object-fit: cover;
    width: 100%;
  }

  button {

  }
`
