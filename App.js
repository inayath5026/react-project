import React from "react";
import ReactDOM from "react-dom/client";
import {data} from "./data.js";

console.log(data);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Header Component
let Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg" />
        </div>
        <div className="nav-links">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </>
  );
};
//Body Component
let Body = () => {
  return (
    <>
      <div className="Body">
        <div className="search">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="card-container">
          {
            data.restaurants.map((restaurant) => (
                <Card resData={restaurant} />
              ))
              
          }
        </div>
      </div>
    </>
  );
};

let Card = ({resData}) => {

  return (
    <>
      <div className="card">
        <img src={resData.image} style={{color:"orange"}}/>
        <h4>{resData.name}</h4>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.rating} stars</h4>
        <h4>{resData.delivery_time} mins</h4>
      </div>
    </>
  );
};

let App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

root.render(<App />);
