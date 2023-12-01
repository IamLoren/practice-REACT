import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import-normalize;

body {
  font-family: sans-serif;
  line-height: 1.5;
  padding: 0;
  margin: 0;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`

export const Flex = styled.div`
	display: flex;
	direction: ${props => props.$direction || 'row'};
	gap: ${props => props.gap || '10px'};

	@media (min-width: 768px) {
	}
`
