import { createContext, useCallback, useState, useContext } from "react";
import { Product, ChildrenContextProps } from "../Types/Types";
import { IsLoggedContext } from "./IsLoggedContext";

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

const getCarted = (id: number) => {
  const cartedString = sessionStorage.getItem(`carted_${id}`);
  const cartedData: Product[] = JSON.parse(cartedString);
  return cartedData
};


const saveCarted = (id: number, cartedData: Product[]) => {
  sessionStorage.setItem(`carted_${id}`, JSON.stringify(cartedData));
};

export const CartedContext = createContext<CartedContextValue>(DEFAULT_VALUE);

export function CartedContextProvider({ children }: ChildrenContextProps) {

  const { loggedUserInfo } = useContext(IsLoggedContext)
  const cartedData = getCarted(loggedUserInfo.id)

  const [carted, setCarted] = useState<Product[]>(cartedData ? cartedData : []);

  const handleClickCart = useCallback(
    (p: Product) => {
      if (!(carted.includes(p))) {
        setCarted([...carted, p]);
        saveCarted(loggedUserInfo.id, [...carted, p])
        console.log(sessionStorage.getItem(`carted_${loggedUserInfo.id}`))
      }
    },
    [carted]
  );
  return (
    <CartedContext.Provider value={{
      cartedList: carted,
      clickFunctionCart: handleClickCart,
    }}
    >
      {children}
    </CartedContext.Provider>
  );
}
