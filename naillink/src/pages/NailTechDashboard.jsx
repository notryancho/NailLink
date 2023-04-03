import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NailTechDashboard = () => {
  const [nailTech, setNailTech] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/nailtech').then((response) => {
      setNailTech(response.data);
    });
  }, []);

  if (!nailTech) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome{ nailTech.name && `, ${nailTech.name}`}!</h1>
      <h2>Your Appointments</h2>
      <ul>
        {nailTech.appointments && nailTech.appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.appt_date} at {appointment.appt_time} with{' '}
            {appointment.customer_name}
          </li>
        ))}
      </ul>
      <h2>Your Reviews</h2>
      <ul>
        {nailTech.reviews && nailTech.reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>By: {review.customer_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NailTechDashboard;


