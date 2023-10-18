import React, { useState, ChangeEvent, useEffect } from "react";

export interface FiltersData {
  textInput: string;
  slider1Value: number;
  slider2Value: number;
  selectedOption: string;
}

interface FiltersProps {
  onFilterChange: (filters: FiltersData) => void;
  prices: number[];
}

function Filters({ onFilterChange, prices }: FiltersProps) {
  const [textInput, setTextInput] = useState("");
  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (prices.length > 0) {
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      setSlider1Value(minPrice);
      setSlider2Value(maxPrice);
    }
  }, [prices]);

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
    <>
      <div>
        <label htmlFor="textInput">Name Description Brand:</label>
        <input
          type="text"
          id="textInput"
          value={textInput}
          onChange={handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor="slider1">Min. Price:</label>
        <input
          type="range"
          id="slider1"
          value={slider1Value}
          min={Math.min(...prices)}
          max={Math.max(...prices)}
          onChange={handleSlider1Change}
        />
        <p>{slider1Value}</p>
      </div>
      <div>
        <label htmlFor="slider2">Max. Price:</label>
        <input
          type="range"
          id="slider2"
          value={slider2Value}
          min={Math.min(...prices)}
          max={Math.max(...prices)}
          onChange={handleSlider2Change}
        />
        <p>{slider2Value}</p>
      </div>
      <div>
        <label htmlFor="dropdown">Categories:</label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </>
  );
}

export { Filters };
