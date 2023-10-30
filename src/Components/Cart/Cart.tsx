import React, { useContext } from "react";
import "./Cart.css";
import { Navbar } from "../Navbar/Navbar";
import { CartedContext, CartedContextValue } from "../../Context/CartedContext";
import { Link } from "react-router-dom";
import { CardListed } from "../CardListed/CardListed";

const Cart: React.FC = () => {
  const { cartedList }: CartedContextValue = useContext(CartedContext);
  const distinctProducts = cartedList.length;
  const totalProducts = cartedList.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartedList.reduce((total, item) => total + item.price * item.quantity, 0);

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
            </div>
          ))}
        </section>
        <div className="subtotal-container">
          <p>Distinct Products: {distinctProducts || 0}</p>
          <p>Total Products: {totalProducts || 0}</p>
          <p>Subtotal: ${subtotal || 0}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export { Cart };