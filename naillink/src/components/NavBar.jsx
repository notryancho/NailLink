import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = ({ user, handleLogout }) => {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        {!localStorage.getItem('id') ? 
        <>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">SIGN UP</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">LOG IN</Link>
        </li></> : 
        <li className="nav-item" onClick={handleLogout}><a href="/" className="nav-link">Log Out</a></li>}
        {localStorage.getItem("user") === "customer" && <>
        <li className="nav-item">
          <Link to="/customer-dashboard" className="nav-link">Customer Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/customer/:id" className="nav-link">Customer Profile</Link>
        </li></>}
         {localStorage.getItem("user") === "nailtech" && <>
        <li className="nav-item">
          <Link to="/nailtech-dashboard" className="nav-link">NailTech Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/nailtech/:id" className="nav-link">NailTech Profile</Link>
        </li></>}
      </ul>
    </nav>
  );
};

export default NavBar;

