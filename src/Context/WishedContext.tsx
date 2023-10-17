import { createContext, useState } from "react";
import {
  Product,
  ChildrenContextProps,
  WishedContextValue,
} from "../Types/Types";

const DEFAULT_VALUE = {
  wishedList: [],
  clickFunctionWish: (e: Product) => console.log(e),
};

export const WishedContext = createContext<WishedContextValue>(DEFAULT_VALUE);

export function WishedContextProvider({ children }: ChildrenContextProps) {
  const [wished, setWished] = useState<Product[]>([]);
  const wishedArray: Product[] = [];
  const wishedValue: WishedContextValue = {
    wishedList: wished,
    clickFunctionWish: handleClickWish,
  };
  function handleClickWish(e: Product) {
    wishedArray.push(e);
    setWished(wishedArray);
  }
  return (
    <WishedContext.Provider value={wishedValue}>
      {children}
    </WishedContext.Provider>
  );
}
