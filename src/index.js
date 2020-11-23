import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { Provider } from "react-redux";
import { StoreState } from "./reducers";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://rem-rest-api.herokuapp.com/api";

ReactDOM.render(
  <React.StrictMode>
    <Provider state={StoreState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
