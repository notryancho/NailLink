import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';


const LoginPage = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await authService.Login(email, password);
      console.log("RESPONSE", response);
      if (response?.nailtech) {
        setUser(response.nailtech)
        navigate('/nailtech-dashboard');
      }
      if (response?.customer) {
        setUser(response.customer)
        navigate('/customer-dashboard');
      }
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;
