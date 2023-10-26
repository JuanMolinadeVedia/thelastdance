import React from "react";
import "./CardListed.css";
import { Product } from "../../Types/Types";

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
        <p className="carshed-description">{product.description}</p>
      </div>
      <div className="carshed-price">
        <p className="carshed-discountPrice">
          $
          {Math.floor(discountPrice(product.price, product.discountPercentage))}
        </p>
      </div>
    </div>
  );
};

export { CardListed };