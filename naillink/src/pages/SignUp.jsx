import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCustomer, setIsCustomer] = useState(false);
  const [isNailTech, setIsNailTech] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send user sign-up data to backend API
    // and redirect user to appropriate dashboard
    if (isCustomer) {
      navigate.push('/customer-dashboard');
    } else if (isNailTech) {
      navigate.push('/nail-tech-dashboard');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
        <label>
          Are you a customer?
          <input
            type="checkbox"
            checked={isCustomer}
            onChange={() => {
              setIsCustomer(!isCustomer);
              setIsNailTech(false);
            }}
          />
        </label>
        <label>
          Are you a nail tech?
          <input
            type="checkbox"
            checked={isNailTech}
            onChange={() => {
              setIsNailTech(!isNailTech);
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
