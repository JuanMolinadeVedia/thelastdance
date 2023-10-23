import { createContext, useCallback, useState } from "react";
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
  message: undefined,
};

type loggedValue = {
  loggedUserInfo: loggedUser;
  isLogged: boolean;
  checkFunction: (user: string, password: string) => Promise<loggedUser>;
  logOut: () => string;
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
  message: string | undefined;
};

const nonSense = () => "no";

export const IsLoggedContext = createContext<loggedValue>({
  loggedUserInfo: DEFAULT_USER,
  isLogged: false,
  checkFunction: () =>
    new Promise((resolve, reject) => {
      console.log("default fn");
      resolve(DEFAULT_USER);
    }),
  logOut: nonSense,
});

const getUserData = () => {
  const userString = sessionStorage.getItem("user");
  const userData: loggedUser = JSON.parse(userString);
  return userData;
};

const saveData = (userData: loggedUser) => {
  sessionStorage.setItem("user", JSON.stringify(userData));
};

export function IsLoggedContextProvider({ children }: ChildrenContextProps) {
  const userData = getUserData();
  const [loggedUser, setLoggedUser] = useState<loggedUser>(
    userData ? userData : DEFAULT_USER
  );
  const [logged, setLogged] = useState(userData ? true : false);

  const fetchUser = useCallback(async (username: string, password: string) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const user = await res.json();
    if (user.id) {
      setLogged(true);
      console.log("YOU'RE IN");
      console.log(user);
    }
    setLoggedUser(user);
    saveData(user);
    return user;
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    setLogged(false);
    console.log(localStorage.getItem("user"));
    return "Done";
  };

  const loggedValue: loggedValue = {
    loggedUserInfo: loggedUser,
    isLogged: logged,
    checkFunction: fetchUser,
    logOut,
  };
  return (
    <IsLoggedContext.Provider value={loggedValue}>
      {children}
    </IsLoggedContext.Provider>
  );
}
