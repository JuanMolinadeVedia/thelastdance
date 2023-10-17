import { createContext, useCallback, useState } from "react";
import { Product, ChildrenContextProps } from "../Types/Types";

const DEFAULT_VALUE = {
  cartedList: [],
  clickFunctionCart: (e: Product) => {
    console.log(1, e.id);
  },
  // clickFunctionCart: (e: Product) => console.log(e),
};

export type CartedContextValue = {
  cartedList: Product[];
  clickFunctionCart: (e: Product) => void;
};

export const CartedContext = createContext<CartedContextValue>(DEFAULT_VALUE);

export function CartedContextProvider({ children }: ChildrenContextProps) {
  const [carted, setCarted] = useState<Product[]>([]);

  const handleClickCart = useCallback(
    (p: Product) => {
      console.log(carted);
      setCarted([...carted, p]);
    },
    [carted]
  );

  return (
    <CartedContext.Provider
      value={{
        cartedList: carted,
        clickFunctionCart: handleClickCart,
      }}
    >
      {children}
    </CartedContext.Provider>
  );
}
