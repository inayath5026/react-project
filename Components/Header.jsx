import { Link } from "react-router-dom";

export default Header = () => {
    return (
      <>
        <div className="header">
          <div className="logo">
            <img src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg" />
          </div>
          <div className="nav-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </>
    );

};