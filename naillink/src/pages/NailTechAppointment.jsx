import React, { useState, useEffect } from "react";
import axios from "axios";

const NailTechAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      const response = await axios.get("http://127.0.0.1:5000/appointment");
      setAppointments(response.data);
    };

    getAppointments();
  }, []);

  return (
    <div>
      <h1>My Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>Date: {appointment.appt_date}</p>
            <p>Time: {appointment.appt_time}</p>
            <p>Customer: {appointment.customer_id.name}</p>
            <p>Status: {appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NailTechAppointments;
