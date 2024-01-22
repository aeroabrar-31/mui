import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Practice from "./practice";
import reportWebVitals from "./reportWebVitals";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("751d78371567369de15bdd41b9f787c6", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
