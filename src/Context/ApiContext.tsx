import { createContext, useEffect, useState, ReactNode } from "react";

export type Product = {
  key: number;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
type ProductContextProviderProps = {
  children: ReactNode;
};

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
