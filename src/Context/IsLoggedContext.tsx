import { createContext, useState } from "react";
import { ChildrenContextProps } from "../Types/Types";

const DEFAULT_USER: loggedUser = {
  id: 0,
  username: "none",
  email: "none",
  firstName: "none",
  lastName: "none",
  gender: "none",
  image: "none",
  token: "rejected",
};

type loggedValue = {
  loggedUserInfo: loggedUser;
  isLogged: boolean;
  checkFunction: (arg0: string, arg1: string) => Promise<boolean>;
};
type loggedUser = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

export const IsLoggedContext = createContext<loggedValue>({
  loggedUserInfo: DEFAULT_USER,
  isLogged: false,
  checkFunction: () => new Promise((resolve, reject) => resolve(false)),
});

export function IsLoggedContextProvider({ children }: ChildrenContextProps) {
  const [loggedUser, setLoggedUser] = useState<loggedUser>(DEFAULT_USER);
  const [logged, setLogged] = useState(false);

  async function fetchUser(username: string, password: string) {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const user = await res.json();
    if (user && user?.token !== "rejected") {
      setLogged(true);
      console.log("YOU'RE IN");
      console.log(logged);
    }
    setLoggedUser(user);
    return user;
  }

  async function logCheck(username: string, password: string) {
    const user = await fetchUser(username, password);
    if (user.token && user.token !== "rejected" && logged) {
      console.log("SI");
      return true;
    } else {
      console.log("NO");
      return false;
    }
  }
  const loggedValue: loggedValue = {
    loggedUserInfo: loggedUser,
    isLogged: logged,
    checkFunction: logCheck,
  };
  return (
    <IsLoggedContext.Provider value={loggedValue}>
      {children}
    </IsLoggedContext.Provider>
  );
}
