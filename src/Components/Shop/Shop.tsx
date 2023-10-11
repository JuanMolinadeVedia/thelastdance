import "./Shop.css";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import { useContext } from "react";
import { ProductContext } from "../../Context/ApiContext";
import { Link } from "react-router-dom";

function Shop() {
  const products = useContext(ProductContext);
  return (
    <>
      <Navbar />
      <section className="card-container">
        {products?.map((item) => {
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

export { Shop };
