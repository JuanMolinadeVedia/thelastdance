import { createContext, useEffect, useState } from "react";

import { User, UserContextProviderProps } from "../Types/Types";

export const UserContext = createContext<User[]>([]);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const USER_URL = "https://dummyjson.com/users";
  const [info, setInfo] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch(USER_URL);
      const data = await response.json();
      setInfo(data.users);
    }

    fetchData();
  }, []);

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
}
