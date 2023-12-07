import styled from 'styled-components'

export const StyledModalWrapper = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`
export const StyledModalContent = styled.div`
	background-color: white;
	padding: 20px;

	width: 50%;
	height: 50%;
	& > div {
		display: flex;
		padding-bottom: 10px;
		border-bottom: 2px solid;
		justify-content: space-between;
	}
`
