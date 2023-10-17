// import React from "react";
import "./Cart.css";
import { Navbar } from "../Navbar/Navbar";
import { useContext } from "react";
import { CartedContext } from "../../Context/CartedContext";
import { CartedContextValue } from "../../Types/Types";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

function Cart() {
  const { cartedList, clickFunctionCart }: CartedContextValue = useContext(
    CartedContext
  );
  return (
    <>
      <Navbar />
      <section className="card-container">
        {cartedList?.map((item) => {
          return (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card product={item}></Card>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export { Cart };
