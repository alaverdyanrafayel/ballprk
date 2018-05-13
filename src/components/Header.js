import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <nav>
      <div className="navbar-container">
        <p className="ballprk-logo">ballprk</p>
        <Link to="#" className="link">
          LOG OUT
        </Link>
      </div>
    </nav>
  );
};

export default Header;
