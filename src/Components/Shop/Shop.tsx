import React, { useState, useEffect, ChangeEvent } from "react";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import { useContext } from "react";
import { ProductContext } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
import { Filters, FiltersData } from "../Filters/Filters";

function Shop() {
  const products = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [prices, setPrices] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleFilterChange = (filters: FiltersData) => {
    const { textInput, slider1Value, slider2Value, selectedOption } = filters;
    const filtered = products.filter((product) => {
      const nameMatch = product.title.toLowerCase().includes(textInput.toLowerCase());
      const priceMatch = product.price >= slider1Value && product.price <= slider2Value;
      const categoryMatch = selectedOption === "" || product.category === selectedOption;
      return nameMatch && priceMatch && categoryMatch;
    });
    setFilteredProducts(filtered);
  };


  useEffect(() => {
    const prices = products.map((product) => product.price);
    setPrices(prices);
    setFilteredProducts(products);
  }, [products]);


  return (
    <>
      <Navbar />
      <Filters onFilterChange={handleFilterChange} products={products} />
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