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
        <li>
          <Link to="/nailtech-dashboard">NailTech Dashboard</Link>
        </li>
        <li>
          <Link to="/customer-appointment/:id">Customer Appointment</Link>
        </li>
        <li>
          <Link to="/nailtech-appointment/:id">NailTech Appointment</Link>
        </li>
        <li>
          <Link to="/nailtech/:id">NailTech Profile</Link>
        </li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
};

export default NavBar;
