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

// Redux-Saga
import createSagaMiddleware from "redux-saga";
import SagaGame from "../src/saga/index";

// Middleware Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appPiKaChu,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// Run Saga
sagaMiddleware.run(SagaGame);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
