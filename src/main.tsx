import React from "react";
import ReactDOM from "react-dom";
import { ListPage } from "./pages";

const App = () => {
  return (
    <div>
      <ListPage />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
