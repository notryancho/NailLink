import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerDashboard = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get('/api/customer').then((response) => {
      setCustomer(response.data);
    });
  }, []);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {customer.name}!</h1>
      <h2>Your Appointments</h2>
      <ul>
        {customer.appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.appt_date} at {appointment.appt_time} with{' '}
            {appointment.nail_tech_name}
          </li>
        ))}
      </ul>
      <h2>Your Reviews</h2>
      <ul>
        {customer.reviews.map((review) => (
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
