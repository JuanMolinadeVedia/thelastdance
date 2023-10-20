import React from "react";
import { Filters, FiltersData } from "../Filters/Filters";
import "./Sidebar.css";

interface SidebarProps {
  onFilterChange: (filters: FiltersData) => void;
  products: Product[];
}

function Sidebar({ onFilterChange, products }: SidebarProps) {
  return (
    <div className="dropdown-sidebar">
      <Filters onFilterChange={onFilterChange} products={products} />
    </div>
  );
}

export { Sidebar };
