import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [mount, setMount] = useState("Dashboard");

  const valueObj = {
    mount,
    setMount,
  };

  return (
    <GlobalContext.Provider value={valueObj}>{children}</GlobalContext.Provider>
  );
};
