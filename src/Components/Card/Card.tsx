import {
  Product,
  WishedContextValue,
  CartedContextValue,
} from "../../Types/Types";
import "./Card.css";
import "../../assets/star.svg";
import { useContext } from "react";
import { WishedContext } from "../../Context/WishedContext";
import { CartedContext } from "../../Context/CartedContext";

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

const starsRating = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg
        key={i}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="star">
          <path
            id="Vector"
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FFD100"
            stroke="#FFD100"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    );
  }
  return stars;
};

function Card(props: CardProps) {
  const { wishedList, clickFunctionWish }: WishedContextValue = useContext(
    WishedContext
  );
  const { cartedList, clickFunctionCart }: CartedContextValue = useContext(
    CartedContext
  );
  console.log(wishedList);
  console.log(cartedList);
  const { product } = props;
  return (
    <>
      <div className="product">
        <div className="rating">
          <p>Rating: {starsRating(product.rating)}</p>
        </div>
        <div className="card-info">
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
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="plus" clip-path="url(#clip0_345_159)">
                <path
                  id="Vector"
                  d="M5.74286 1.68747V9.27887"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M1.94284 5.48312H9.54284"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_345_159">
                  <rect
                    width="11.4"
                    height="10.5737"
                    fill="black"
                    transform="translate(0.0428467 0.331787)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            className="button-cart"
            onClick={(e) => {
              e.preventDefault();
              clickFunctionCart(product);
            }}
          >
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="shopping-bag" clip-path="url(#clip0_345_155)">
                <path
                  id="Vector"
                  d="M5.6857 1.63828L2.42856 5.97621V21.159C2.42856 21.7342 2.65733 22.2859 3.06455 22.6927C3.47178 23.0995 4.02409 23.328 4.59999 23.328H19.8C20.3759 23.328 20.9282 23.0995 21.3354 22.6927C21.7426 22.2859 21.9714 21.7342 21.9714 21.159V5.97621L18.7143 1.63828H5.6857Z"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M2.42856 5.97623H21.9714"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M16.5428 10.3141C16.5428 11.4646 16.0853 12.568 15.2708 13.3815C14.4564 14.195 13.3518 14.6521 12.2 14.6521C11.0482 14.6521 9.94355 14.195 9.12911 13.3815C8.31467 12.568 7.85712 11.4646 7.85712 10.3141"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_345_155">
                  <rect
                    width="22.8"
                    height="25.2143"
                    fill="black"
                    transform="translate(0.799988 0.0115356)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export { Card };
