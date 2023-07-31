import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


/* 테스트
import * as WalletUtil from "./util/WalletUtil";
await WalletUtil.init().then(
    (isSignedIn) => {
        if (!isSignedIn) {
            WalletUtil.signIn();
        }
    }
);
 */

import * as WalletUtil from "./util/WalletUtil";

window.onload = async () => {
  const isLogined = await WalletUtil.init();
  if(!isLogined) WalletUtil.signIn();
  else{
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
