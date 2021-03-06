import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./App.js";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store";

const app = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
