import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { SettingsContextProvider } from "./contexts/SettingsContext";
import { AudioContextProvider } from "./contexts/AudioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <SettingsContextProvider>
    <AudioContextProvider>
      <App />
    </AudioContextProvider>
  </SettingsContextProvider>

  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
