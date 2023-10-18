import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import { useContext } from "react";
import { ProductContext } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
import { Filters, FiltersData } from "../Filters/FIlters";

function Shop() {
  const products = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [prices, setPrices] = useState<number[]>([]);

  const handleFilterChange = (filters: FiltersData) => {
    const { slider1Value, slider2Value } = filters;
    const filtered = products.filter((product) => {
      return product.price >= slider1Value && product.price <= slider2Value;
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const prices = products.map((product) => product.price);
    setPrices(prices);
  }, [products]);

  return (
    <>
      <Navbar />
      <Filters onFilterChange={handleFilterChange} prices={prices} />
      <section className="card-container">
        {filteredProducts?.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <Card product={item} />
          </Link>
        ))}
      </section>
    </>
  );
}

export { Shop };
