import React from "react"
import ReactDOM from "react-dom/client";

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
    )

}
//Body Component
let Body = () => {

    return (
        <>
        
            <div className="Body">

                <div className="search">

                    <input type="text"/>
                    <button>Search</button>

                </div>
                <div className="card-container">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </div>
        
        </>
    );

}

let Card = () => {
    return (
        <>
        
            <div className="card">
                <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"/>
                <h4>Mehfil Restaurant</h4>
                <h4>Biryani, North Indian, Asian</h4>
                <h4>4.8 stars</h4>
                <h4>26 mins</h4>
            </div>

        </>
    );
}

let App = () => {
    return (
        <>
            <Header />
            <Body />

        </>
    );
}


root.render(<App />);