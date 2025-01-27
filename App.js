import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));


let App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

root.render(<App />);
