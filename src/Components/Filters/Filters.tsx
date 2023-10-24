import { useState, ChangeEvent, useEffect } from "react";
import "./Filters.css";
import { Product } from "../../Types/Types";

export interface FiltersData {
  textInput: string;
  slider1Value: number;
  slider2Value: number;
  selectedOption: string;
}

interface FiltersProps {
  onFilterChange: (filters: FiltersData) => void;
  products: Product[];
}

function Filters({ onFilterChange, products }: FiltersProps) {
  const [textInput, setTextInput] = useState("");
  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  useEffect(() => {
    if (products && products.length > 0) {
      const minPrice = Math.min(...products.map((product) => product.price));
      const maxPrice = Math.max(...products.map((product) => product.price));
      setSlider1Value(minPrice);
      setSlider2Value(maxPrice);
    }
  }, [products]);

  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleSlider1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setSlider1Value(Number(event.target.value));
  };

  const handleSlider2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setSlider2Value(Number(event.target.value));
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleApplyFilters = () => {
    onFilterChange({
      textInput,
      slider1Value,
      slider2Value,
      selectedOption,
    });
  };

  return (
    <div className="filters-container">
      <div className="filter-item">
        <label htmlFor="textInput">Name Description Brand:</label>
        <input
          type="text"
          id="textInput"
          value={textInput}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="slider1">Min. Price:</label>
        <input
          type="range"
          id="slider1"
          value={slider1Value}
          min={
            products ? Math.min(...products.map((product) => product.price)) : 0
          }
          max={
            products ? Math.max(...products.map((product) => product.price)) : 0
          }
          onChange={handleSlider1Change}
        />
        <p>{slider1Value}</p>
      </div>
      <div className="filter-item">
        <label htmlFor="slider2">Max. Price:</label>
        <input
          type="range"
          id="slider2"
          value={slider2Value}
          min={
            products ? Math.min(...products.map((product) => product.price)) : 0
          }
          max={
            products ? Math.max(...products.map((product) => product.price)) : 0
          }
          onChange={handleSlider2Change}
        />
        <p>{slider2Value}</p>
      </div>
      <div className="filter-item">
        <label htmlFor="dropdown">Categories:</label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="apply-button" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
}

export { Filters };
