import { createContext, useState, useContext, useCallback } from "react";
import { Product, ChildrenContextProps } from "../Types/Types";
import { IsLoggedContext } from "./IsLoggedContext";

export type WishedContextValue = {
  wishedList: Product[];
  clickFunctionWish: (e: Product) => void;
};

const DEFAULT_VALUE = {
  wishedList: [],
  clickFunctionWish: (e: Product) => console.log(e),
};

const getWished = (id: number) => {
  const wishedString = sessionStorage.getItem(`wished_${id}`);
  const wishedData: Product[] = JSON.parse(wishedString);
  return wishedData
};


const saveWished = (id: number, wishedData: Product[]) => {
  sessionStorage.setItem(`wished_${id}`, JSON.stringify(wishedData));
};

export const WishedContext = createContext<WishedContextValue>(DEFAULT_VALUE);

export function WishedContextProvider({ children }: ChildrenContextProps) {

  const { loggedUserInfo } = useContext(IsLoggedContext)
  const wishedData = getWished(loggedUserInfo.id)
  const [wished, setWished] = useState<Product[]>(wishedData ? wishedData : []);

  const handleClickWish = useCallback(
    (p: Product) => {
      console.log(wished);
      setWished([...wished, p]);
      saveWished(loggedUserInfo.id, [...wished, p])
      console.log(getWished(loggedUserInfo.id))
    },
    [wished]
  );
  return (
    <WishedContext.Provider value={{
      wishedList: wished,
      clickFunctionWish: handleClickWish,
    }}>
      {children}
    </WishedContext.Provider>
  );
}
