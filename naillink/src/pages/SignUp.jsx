import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [is_customer, setIsCustomer] = useState(false);
  const [is_nail_tech, setIsNailTech] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await authService.SignUp(name, email, password, is_customer, is_nail_tech);
    navigate('/login');
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          NAME:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          EMAIL:
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
        <label>
          Are you a customer?
          <input
            type="checkbox"
            checked={is_customer}
            onChange={() => {
              setIsCustomer(!is_customer);
              setIsNailTech(false);
            }}
          />
        </label>
        <label>
          Are you a nail tech?
          <input
            type="checkbox"
            checked={is_nail_tech}
            onChange={() => {
              setIsNailTech(!is_nail_tech);
              setIsCustomer(false);
            }}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

