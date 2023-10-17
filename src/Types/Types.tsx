import { ReactNode } from "react";

export type User = {
  key: number;
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  domain: string;
  address: Address;
  university: string;
};
export type Address = {
  address: string;
  city: string;
};
export type UserContextProviderProps = {
  children: ReactNode;
};
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
export type ChildrenContextProps = {
  children: ReactNode;
};

export type WishedContextValue = {
  wishedList: Product[];
  clickFunction: (e: Product) => void;
};
export type CartedContextValue = {
  cartedList: Product[];
  clickFunction: (e: Product) => void;
};
