import { Product } from "../../Context/ApiContext";
import "./Card.css";

interface CardProps {
  product: Product;
}

const randomSelect = (array: string[]) => {
  const max = Math.ceil(array.length - 1);
  const min = Math.floor(0);
  return array[Math.floor(Math.random() * (max - min + 1) + min)];
};
const discountPrice = (price: number, discount: number) => {
  const result: number = price - price * (discount / 100);
  return result;
};

function Card(props: CardProps) {
  const { product } = props;
  console.log(props);
  return (
    <>
      <div className="product">
        <div className="info">
          <div className="image">
            <img
              className="productImg"
              src={randomSelect(product.images)}
              alt={product.title}
            />
          </div>
          <h3 className="title">{product.title}</h3>
          <p className="description">{product.description}</p>
        </div>
        <div className="price">
          <p className="price">${product.price}</p>
          <p className="discountPrice">
            $
            {Math.floor(
              discountPrice(product.price, product.discountPercentage)
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export { Card };
