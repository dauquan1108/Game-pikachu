import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// npm install --save redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
// npm install redux
import { createStore, applyMiddleware } from "redux";
import appPiKaChu from "./reducer/index";
import { Provider } from "react-redux";

const store = createStore(appPiKaChu, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
