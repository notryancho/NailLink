import React from "react";
import { Link } from "react-router-dom";



const NavBar = ({ user, handleLogout }) => {


  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!localStorage.getItem('id') ? 
        <>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li></> : 
        <li onClick={handleLogout}>Log Out</li>}
        {localStorage.getItem("user") === "customer" && <>
        <li>
          <Link to="/customer-dashboard">Customer Dashboard</Link>
        </li>
        <li>
          <Link to="/customer/:id">Customer Profile</Link>
        </li></>}
         {localStorage.getItem("user") === "nailtech" && <>
        <li>
          <Link to="/nailtech-dashboard">NailTech Dashboard</Link>
        </li>
        <li>
          <Link to="/nailtech/:id">NailTech Profile</Link>
        </li></>}
      </ul>
    </nav>
  );
};

export default NavBar;
