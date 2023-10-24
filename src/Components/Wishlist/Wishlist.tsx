import { Navbar } from "../Navbar/Navbar";
import "./Wishlist.css";
import { useContext } from "react";
import { WishedContext } from "../../Context/WishedContext";
import { WishedContextValue } from "../../Context/WishedContext";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

function Wishlist() {
  const { wishedList, clickFunctionCart }: WishedContextValue =
    useContext(WishedContext);
  return (
    <>
      <Navbar />
      <section className="card-container">
        {wishedList?.map((item) => {
          return (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card product={item} />
            </Link>
          );
        })}
      </section>
    </>
  );
}

export { Wishlist };
