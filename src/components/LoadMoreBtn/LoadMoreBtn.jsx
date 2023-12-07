import React from 'react'
import styled from 'styled-components'

export const LoadMoreBtn = ({ click }) => {
	return (
		<>
			<Btn type='button' onClick={click}>
				Load More
			</Btn>
		</>
	)
}

const Btn = styled.button`
	padding: 4px 12px;
	font-size: 1.5rem;
	display: block;
	margin: 0 auto;
	cursor: pointer;
	margin-bottom: 50px;
`
