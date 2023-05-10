import React from "react";
import Router from "./Routes.jsx";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    axios.get('')
  }, [])
  return <Router />;
};

export default App;
