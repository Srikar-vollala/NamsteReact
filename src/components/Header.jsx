import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container"> 
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0oZvf_Vj2VpP9fp5NLte238mjaO3LScZag&s"
          alt="Logo"
          className="logo" 
        />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About Us</Link></li>
          <li>Contact-Us</li> 
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
