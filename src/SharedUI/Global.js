import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  direction: ${props => props.$direction || 'row'};
  gap:${props => props.gap || '10px'};
  
  @media (min-width: 768px) {
    
  }
`