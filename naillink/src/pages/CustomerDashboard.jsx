
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerDashboard = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/customer').then((response) => {
        
      setCustomer(response.data);
    });
  }, []);

  if (!customer) {
    return <div>Loading...</div>;
  }
  
  console.log(customer)
  return (
    <div>
   <h1>Welcome, {customer && customer.name}!</h1>
      <h2>Your Appointments</h2>
      <ul>
        {customer.appointments && customer.appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.appt_date} at {appointment.appt_time} with{' '}
            {appointment.nail_tech_name}
          </li>
        ))}
      </ul>
      <h2>Your Reviews</h2>
      <ul>
        {customer.reviews && customer.reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>By: {review.nail_tech_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDashboard;