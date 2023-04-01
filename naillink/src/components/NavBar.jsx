import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/customer-dashboard">Customer Dashboard</Link>
        </li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
};

export default NavBar;
