import "./Mainpage.css";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import { useContext } from "react";
import { ProductContext } from "../../Context/ApiContext";

function Mainpage() {
  const product = useContext(ProductContext);
  return (
    <>
      <Navbar />
      <section>
        {product?.map((item) => {
          return <Card key={item.id} product={item}></Card>;
        })}
      </section>
    </>
  );
}

export { Mainpage };
