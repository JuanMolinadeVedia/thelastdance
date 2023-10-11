import { createContext, useEffect, useState } from "react";
import { Product, ProductContextProviderProps } from "../Types/Types";

export const ProductContext = createContext<Product[] | undefined>(undefined);

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const PRODUCT_URL = "https://dummyjson.com/products";
  const [info, setInfo] = useState<Product[] | undefined>(undefined);

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
