import React, { useContext } from "react";
import "./Cart.css";
import { Navbar } from "../Navbar/Navbar";
import { CartedContext, CartedContextValue } from "../../Context/CartedContext";
import { Link } from "react-router-dom";
import { CardListed } from "../CardListed/CardListed";

const Cart: React.FC = () => {
  const { cartedList, removeFromCart }: CartedContextValue =
    useContext(CartedContext);

  const subtotal = cartedList.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  return (
    <>
      <Navbar />
      <h2>Cart</h2>
      <div className="cart-container">
        <section className="card-container">
          {cartedList?.map((item) => (
            <div key={item.id} className="card-listed">
              <Link to={`/item/${item.id}`}>
                <CardListed product={item} />
              </Link>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </section>
        <div className="subtotal-container">
          <p>Subtotal: ${subtotal}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export { Cart };
