import React from "react";

const AppointmentCard = ({ appointment }) => {
  return (
    <div>
      <h3>{appointment.nailTech.name}</h3>
      <p>{appointment.service.name}</p>
      <p>{appointment.appt_date}</p>
      <p>{appointment.appt_time}</p>
      <p>{appointment.status}</p>
      <button>Cancel Appointment</button>
    </div>
  );
};

export default AppointmentCard;
