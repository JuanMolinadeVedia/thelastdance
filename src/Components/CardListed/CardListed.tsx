import React, { useContext, useState } from "react";
import "./CardListed.css";
import { Product } from "../../Types/Types";
import { CartedContext, CartedContextValue } from "../../Context/CartedContext";

interface CardListedProps {
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

const CardListed: React.FC<CardListedProps> = ({ product }) => {
  const { clickFunctionCart }: CartedContextValue = useContext(CartedContext);
  const [quantity, setQuantity] = useState(1);

  const handleRemoveFromCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default behavior of the button
    clickFunctionCart(product);
  };

  const handleAddQuantity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleSubtractQuantity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="carshed-product">
      <div className="carshed-info">
        <div className="carshed-image">
          <img
            className="carshed-productImg"
            src={randomSelect(product.images)}
            alt={product.title}
          />
        </div>
        <h3 className="carshed-title">{product.title}</h3>
      </div>
      <div className="carshed-price">
        <p className="carshed-discountPrice">
          ${Math.floor(discountPrice(product.price, product.discountPercentage))}
        </p>
        <div className="quantity-container">
          <button className="quantity-button" onClick={handleSubtractQuantity}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-button" onClick={handleAddQuantity}>
            +
          </button>
        </div>
        <button className="remove-button" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};

export { CardListed };