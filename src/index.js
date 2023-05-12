import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss";
import store from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
