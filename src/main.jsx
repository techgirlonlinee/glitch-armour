// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./styles.css";
// import { ScrambleProvider } from './components/ScrambleProvider';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { ScrambleProvider } from "./components/ScrambleProvider";
import { ScrambleAll } from "./components/ScrambleAll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ScrambleProvider>
    <ScrambleAll>
      <App />
    </ScrambleAll>
  </ScrambleProvider>
);
