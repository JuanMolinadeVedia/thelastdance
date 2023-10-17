import { createContext, useState } from "react";
import {
  Product,
  ChildrenContextProps,
  WishedContextValue,
} from "../Types/Types";

const DEFAULT_VALUE = {
  wishedList: [],
  clickFunction: (e: Product) => console.log(e),
};

export const WishedContext = createContext<WishedContextValue>(DEFAULT_VALUE);

export function WishedContextProvider({ children }: ChildrenContextProps) {
  const [wished, setWished] = useState<Product[]>([]);
  const wishedArray: Product[] = [];
  const wishedValue: WishedContextValue = {
    wishedList: wished,
    clickFunction: handleClick,
  };
  function handleClick(e: Product) {
    wishedArray.push(e);
    setWished(wishedArray);
  }
  return (
    <WishedContext.Provider value={wishedValue}>
      {children}
    </WishedContext.Provider>
  );
}
