import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Product } from "../../Types/Types";
import { Card } from "../Card/Card";
import "./Mainpage.css";
import { Link } from "react-router-dom";

function Mainpage() {
  const [topRatedCards, setTopRatedCards] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      // Ordenar los productos por puntuación de mayor a menor
      const sortedProducts = data.products.sort(
        (a: Product, b: Product) => b.rating - a.rating
      );

      // Obtener las primeras 10 tarjetas con mejor puntuación
      const topRated = sortedProducts.slice(0, 10);

      setTopRatedCards(topRated);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Top rated products</h1>

      <div className="card-container">
        {topRatedCards.map((card: Product) => (
          // Renderizar cada tarjeta aquí
          <Link key={card.id} to={`/item/${card.id}`}>
            <Card key={card.id} product={card} />
          </Link>
        ))}
      </div>
    </>
  );
}

export { Mainpage };
