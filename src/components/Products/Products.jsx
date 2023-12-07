import { Card } from "../Card/Card";
import { StyledCard } from "./Product.styled";

export const Products = ({ products = [] }) => {
  return (
    <div>
      <StyledCard>
        {products.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </StyledCard>
    </div>
  );
};
