import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashboard';
import NailTechDashboard from './pages/NailTechDashboard';
import NailTechProfile from './pages/NailTechProfile';
import CustomerAppointment from './pages/CustomerAppointment';
import NailTechAppointment from './pages/NailTechAppointment';
// import Review from './pages/Review';
// import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/user');
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/user/logout');
      setUser(null);
    } catch (err) {
      console.error(err);
    }
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
        <Route path="/nailtech/:id" element={<NailTechProfile user={user} />} />
        <Route path="/customer-appointment/:id" element={<CustomerAppointment user={user} />} />
        <Route path="/nailtech-appointment/:id" element={<NailTechAppointment user={user} />} />
      </Routes>
    </div>
  );
};

export default App;

