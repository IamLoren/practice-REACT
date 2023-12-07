import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return (
		<StyledHeader>
			<h2>Extra Practice</h2>
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
`
