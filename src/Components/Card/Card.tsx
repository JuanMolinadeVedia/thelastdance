import { Product } from "../../Types/Types";
import "./Card.css";
import { useContext } from "react";
import { WishedContext } from "../../Context/WishedContext";
import { CartedContext } from "../../Context/CartedContext";

import {
  ReceiptLongIcon,
  ShoppingCartIcon,
} from "../../assets/Imports/Imports";


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
  const { clickFunctionWish } = useContext(WishedContext);
  const { clickFunctionCart } = useContext(CartedContext);
  const { product } = props;

  return (
    <>
      <div className="product">
        <div className="product-info">
          <div className="product-image">
            <img
              className="productImg"
              src={randomSelect(product.images)}
              alt={product.title}
            />
          </div>
          <div className="product-title">
            <h3 className="title">{product.title}</h3>
          </div>
          <div className="product-description">
            <p className="description">{product.description}</p>
          </div>
        </div>
        <div className="product-price">
          <p className="price">${product.price}</p>
          <p className="discountPrice">
            $
            {Math.floor(
              discountPrice(product.price, product.discountPercentage)
            )}
          </p>
        </div>
        <div className="button-wrapper">
          <button
            className="button-wishlist"
            onClick={(e) => {
              e.preventDefault();
              clickFunctionWish(product);
            }}
          >
            <ReceiptLongIcon />
          </button>
          <button
            className="button-cart"
            onClick={(e) => {
              e.preventDefault();
              clickFunctionCart(product);
            }}
          >
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export { Card };
