import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NailTechDashboard = ({ user }) => {
  const [appointments, setAppointments] = useState(null);

  const getAppointments = async () => {
    axios.get('http://127.0.0.1:5000/all-appointments').then((response) => {
      const customerAppointments = response.data.filter((appt) => {
        return appt?.nail_tech_id?.$oid === localStorage.getItem('id')
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
      <h1>Welcome, {user.name}!</h1>
      <h2>Your Appointments</h2>
      <ul>
        {appointments && appointments.map((appointment) => (
          <>
            <li key={appointment._id.$oid}>
              {appointment.appt_date.$date} at {appointment.appt_time} with{' '}
              {appointment.customer_name} for {appointment.service_name}
            </li>
            <button onClick={() => handleDelete(appointment._id.$oid)}>Cancel</button>
            </>
        ))}
      </ul>
    
    </div>
  );
};

export default NailTechDashboard;
