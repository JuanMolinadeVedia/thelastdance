import "./Mainpage.css";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import { useContext } from "react";
import { ProductContext } from "../../Context/ApiContext";
import { Link } from "react-router-dom";

function Mainpage() {
  const product = useContext(ProductContext);
  return (
    <>
      <Navbar />
      <section>
        {product?.map((item) => {
          return (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card product={item}></Card>;
            </Link>
          )
        })}
      </section>
    </>
  );
}

export { Mainpage };

