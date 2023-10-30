import React, { createContext, useCallback, useState, useContext } from "react";
import { Product, ChildrenContextProps } from "../Types/Types";
import { IsLoggedContext } from "./IsLoggedContext";

const DEFAULT_VALUE = {
  cartedList: [],
  clickFunctionCart: (e: Product) => {
    console.log(1, e.id);
  },
};

export type CartedContextValue = {
  cartedList: Product[];
  clickFunctionCart: (e: Product) => void;
};

const getCarted = (id: number) => {
  const cartedString = localStorage.getItem(`carted_${id}`);
  if (cartedString) {
    const cartedData: Product[] = JSON.parse(cartedString);
    return cartedData;
  }
};

const saveCarted = (id: number, cartedData: Product[]) => {
  localStorage.setItem(`carted_${id}`, JSON.stringify(cartedData));
};

export const CartedContext = createContext<CartedContextValue>(DEFAULT_VALUE);

export function CartedContextProvider({ children }: ChildrenContextProps) {
  const { loggedUserInfo } = useContext(IsLoggedContext);
  const cartedData = getCarted(loggedUserInfo.id);
  const [carted, setCarted] = useState<Product[]>(cartedData ? cartedData : []);

  const handleClickCart = useCallback(
    (p: Product) => {
      const isIn = carted.some((product) => product.id === p.id);
      if (isIn) {
        const updatedCarted = carted.filter((product) => product.id !== p.id);
        setCarted(updatedCarted);
        saveCarted(loggedUserInfo.id, updatedCarted);
      } else {
        setCarted([...carted, p]);
        saveCarted(loggedUserInfo.id, [...carted, p]);
      }
    },
    [carted, loggedUserInfo.id]
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