import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to NailLink</h1>
      <p className="home-description">
        Book appointments with your favorite nail techs today!
      </p>
      <Link to="/signup">
        <button className="home-button">Sign Up</button>
      </Link>
      <Link to="/login">
        <button className="home-button">Log In</button>
      </Link>
    </div>
  );
};

export default Home;

