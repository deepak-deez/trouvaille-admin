import React from "react";
import Router from "./Routes";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </>
  );
};

export default App;
