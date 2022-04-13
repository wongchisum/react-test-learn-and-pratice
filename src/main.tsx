import React from "react";
import ReactDOM from "react-dom";
import { ButtonPage } from "./pages";

const App = () => {
  return (
    <div>
      <ButtonPage />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
