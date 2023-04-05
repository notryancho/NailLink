import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CustomerDashboard = ({ user }) => {
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/all-appointments').then((response) => {
      const customerAppointments = response.data.filter((appt) => {
        return appt.customer_id.$oid === localStorage.getItem('id')
      })
      setAppointments(customerAppointments);
    });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user && user.name}!</h1>
      <h2>Your Appointments</h2>
      <Link to="/customer-appointment/:id">Book an Appointment</Link>
      <ul>
        {appointments &&
          appointments.map((appointment) => (
            <li key={appointment._id.$oid}>
              {appointment.appt_date.$date} at {appointment.appt_time} with{' '}
              {appointment.nail_tech_name}
            </li>
          ))}
      </ul>
      {/* <h2>Your Reviews</h2>
      <ul>
        {user.reviews &&
          user.reviews.map((review) => (
            <li key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              <p>By: {review.nail_tech_name}</p>
            </li>
          ))}
      </ul> */}
      
    </div>
  );
};

export default CustomerDashboard;
