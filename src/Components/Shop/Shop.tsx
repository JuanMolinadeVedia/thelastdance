import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import { useContext } from "react";
import { ProductContext } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
import { FiltersData } from "../Filters/Filters";
import { Sidebar } from "../Sidebar/Sidebar";
import { ListIcon } from "../../assets/Imports/Imports";
import "../Sidebar/Sidebar.css";

function Shop() {
  const products = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFilterChange = (filters: FiltersData) => {
    const { textInput, slider1Value, slider2Value, selectedOption } = filters;
    const filtered = products.filter((product) => {
      const nameMatch = product.title
        .toLowerCase()
        .includes(textInput.toLowerCase());
      const priceMatch =
        product.price >= slider1Value && product.price <= slider2Value;
      const categoryMatch =
        selectedOption === "" || product.category === selectedOption;
      return nameMatch && priceMatch && categoryMatch;
    });
    setFilteredProducts(filtered);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="sidebar-button">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <ListIcon />
          </button>
        </div>
        {isSidebarOpen && (
          <Sidebar onFilterChange={handleFilterChange} products={products} />
        )}
        <section className="card-container">
          {filteredProducts?.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card product={item} />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}

export { Shop };
