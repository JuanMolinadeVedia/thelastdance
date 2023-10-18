import { createContext, useEffect, useState } from "react";
import { Product, ChildrenContextProps } from "../Types/Types";

export const ProductContext = createContext<Product[]>([]);

export function ProductContextProvider({ children }: ChildrenContextProps) {
  const PRODUCT_URL = "https://dummyjson.com/products";
  const [info, setInfo] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch(PRODUCT_URL);
      const data = await response.json();
      setInfo(data.products);
    }

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={info}>{children}</ProductContext.Provider>
  );
}
