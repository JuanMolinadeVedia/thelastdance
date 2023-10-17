import { createContext, useState } from "react";
import {
  Product,
  ChildrenContextProps,
  CartedContextValue,
} from "../Types/Types";

const DEFAULT_VALUE = {
  cartedList: [],
  clickFunction: (e: Product) => console.log(e),
};

export const CartedContext = createContext<CartedContextValue>(DEFAULT_VALUE);

export function CartedContextProvider({ children }: ChildrenContextProps) {
  const [carted, setCarted] = useState<Product[]>([]);
  const cartedArray: Product[] = [];
  const cartedValue: CartedContextValue = {
    cartedList: carted,
    clickFunction: handleClick,
  };
  function handleClick(e: Product) {
    cartedArray.push(e);
    setCarted(cartedArray);
  }
  return (
    <CartedContext.Provider value={cartedValue}>
      {children}
    </CartedContext.Provider>
  );
}
