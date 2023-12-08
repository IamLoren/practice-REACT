import { Card } from "../Card/Card";
import { StyledCard } from "./Product.styled";

export const Products = ({ products = [], onAddToCart }) => {
  return (
    <div>
      <StyledCard>
        {products.map((item) => (
          <Card {...item} key={item.id} onAddToCart={()=>onAddToCart(item)} />
        ))}
      </StyledCard>
    </div>
  );
};
