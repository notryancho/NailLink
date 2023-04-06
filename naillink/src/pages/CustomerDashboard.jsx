import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CustomerDashboard = ({ user }) => {
  const [appointments, setAppointments] = useState(null);

  const getAppointments = async () => {
    axios.get('http://127.0.0.1:5000/all-appointments').then((response) => {
      const customerAppointments = response.data.filter((appt) => {
        return appt?.customer_id?.$oid === localStorage.getItem('id')
      })
      setAppointments(customerAppointments);
    });
  }

  useEffect(() => {
    getAppointments()
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/appointment/${id}`)
    } catch (err) {
      console.error(err)
    }
    getAppointments()
  }

  return (
    <div>
      <h1>Welcome, {user && user.name}!</h1>
      <h2>Your Appointments</h2>
      <Link to="/customer-appointment/:id">Book an Appointment!</Link>
      <ul>
        {appointments &&
          appointments.map((appointment) => (
            <>
            <li key={appointment._id.$oid}>
              {appointment.appt_date.$date} at {appointment.appt_time} with{' '}
              {appointment.nail_tech_name} for ${appointment.service_price}
            </li>
            <button onClick={() => handleDelete(appointment._id.$oid)}>Cancel</button>
            </>
          ))}
      </ul>
      
      
    </div>
  );
};

export default CustomerDashboard;
