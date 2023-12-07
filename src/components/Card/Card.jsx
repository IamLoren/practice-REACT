import styled from "styled-components";

export const Card = ({ id, title, description, price, thumbnail }) => {
  return (
    <StyledCard>
      <img src={thumbnail} alt="Title" width="300" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </StyledCard>
  );
};

const StyledCard = styled.li`
  width: 30%;
  img {
    height: 200px;
  }
`;
