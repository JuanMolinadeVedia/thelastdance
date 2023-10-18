import { Product } from "../../Types/Types";
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

// const starsRating = (rating: number) => {
//   const stars = [];
//   for (let i = 0; i < rating; i++) {
//     stars.push(
//       <svg
//         key={i}
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g id="star">
//           <path
//             id="Vector"
//             d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
//             fill="#FFD100"
//             stroke="#FFD100"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </g>
//       </svg>
//     );
//   }
//   return stars;
// };

function Card(props: CardProps) {
  const { wishedList, clickFunctionWish } = useContext(WishedContext);
  const { cartedList, clickFunctionCart } = useContext(CartedContext);
  const { product } = props;
  return (
    <>
      <div className="product">
        <div className="rating">
          {/* <p>Rating: {starsRating(product.rating)}</p> */}
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
            Wishlist
          </button>
          <button
            className="button-cart"
            onClick={(e) => {
              e.preventDefault();
              console.log("CALLING FN");
              clickFunctionCart(product);
              console.log("END CALLING FN");
            }}
          >
            Cart{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export { Card };
