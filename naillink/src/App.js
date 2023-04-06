import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashboard';
import NailTechDashboard from './pages/NailTechDashboard';
import NailTechProfile from './pages/NailTechProfile';
import CustomerProfile from './pages/CustomerProfile'; 
import CustomerAppointment from './pages/CustomerAppointment';
import NailTechAppointment from './pages/NailTechAppointment';
import { authService } from './services/auth';
// import Review from './pages/Review';
// import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const response = await authService.CheckSession(localStorage.getItem('email'));
      if (response?.nailtech) {
        localStorage.setItem('user', "nailtech")
        localStorage.setItem('email', response.nailtech.email)
        setUser(response.nailtech)
      }
      if (response?.customer) {
        localStorage.setItem('user', "customer")
        localStorage.setItem('email', response.customer.email)
        setUser(response.customer)
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    setUser(null)
    localStorage.clear()
    navigate("/")
  };

  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />
  
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard user={user} />} />
        <Route path="/nailtech-dashboard" element={<NailTechDashboard user={user} />} />
        <Route path="/nailtech/:id" element={<NailTechProfile user={user} handleLogout={handleLogout} />} />
        <Route path="/customer/:id" element={<CustomerProfile user={user} handleLogout={handleLogout} />} />
        <Route path="/customer-appointment/:id" element={<CustomerAppointment user={user} />} />
        <Route path="/nailtech-appointment/:id" element={<NailTechAppointment user={user} />} />
      </Routes>
    </div>
  );
};

export default App;

