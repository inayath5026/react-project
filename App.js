import React from "react"
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


function Test(){
    return <h1>Hello from JSX (Test)🚀</h1>;
}



root.render(<Test/>);