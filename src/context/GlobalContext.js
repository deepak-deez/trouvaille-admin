import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [mount, setMount] = useState("Dashboard");
  const [navHead, setNavHead] = useState("All Users");

  const valueObj = {
    mount,
    setMount,
    navHead,
    setNavHead,
  };

  return (
    <GlobalContext.Provider value={valueObj}>{children}</GlobalContext.Provider>
  );
};
