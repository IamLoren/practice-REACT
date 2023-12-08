import styled from 'styled-components'
import {AiOutlineShoppingCart} from "react-icons/ai";

export const Header = ({onCartClick}) => {
	return (
		<StyledHeader>
			<h2>Extra Practice</h2>
			<button onClick={onCartClick} aria-label='Open Cart'><StyledCartIcon size={40}/></button>
		</StyledHeader>
	)
}
const StyledHeader = styled.header`
	padding: 20px 20px;
	background-color: orange;
	font-weight: 700;
	font-style: italic;
	display: flex;
	justify-content: space-between;
	
	button{
		background-color: transparent;
		border: none;
	}
`

const StyledCartIcon = styled(AiOutlineShoppingCart)`
	transition: color 250ms ease-in-out;
	color: darkgreen;

	&:hover, &:focus {
		color: greenyellow;
	}
`
