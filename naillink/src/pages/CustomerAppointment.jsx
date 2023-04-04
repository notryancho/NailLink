import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CustomerAppointment = ({ user }) => {
  const [nailTechs, setNailTechs] = useState([]);
  const [selectedNailTech, setSelectedNailTech] = useState("");
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch nail techs and their services from the backend
    axios.get("http://127.0.0.1:5000/nailtech").then((response) => {
        console.log(response.data)
      setNailTechs(response.data);
    });

    // Fetch services from the backend
    axios.get("http://127.0.0.1:5000/service").then((response) => {
      setServices(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new appointment by sending a POST request to the backend
    axios
      .post("http://127.0.0.1:5000/appointment", {
        customer_id: user.id,
        nail_tech_id: selectedNailTech,
        appt_date: date,
        appt_time: time,
        service_id: selectedService,
        status: "booked",
      })
      .then(() => {
        // Navigate the user to the customer dashboard
        navigate.push("/dashboard/customer");
      });
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nailtech-select">Select a Nail Technician:</label>
          <select
            id="nailtech-select"
            onChange={(event) => setSelectedNailTech(event.target.value)}
            value={selectedNailTech}
            required
          >
            <option value="">Choose a Nail Technician</option>
            {nailTechs.map((nailTech) => (
              <option key={nailTech.id} value={nailTech.id}>
                {nailTech.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service-select">Select a Service:</label>
          <select
            id="service-select"
            onChange={(event) => setSelectedService(event.target.value)}
            value={selectedService}
            required
          >
            <option value="">Choose a Service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} (${service.price})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date-input">Select a Date:</label>
          <input
            type="date"
            id="date-input"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time-input">Select a Time:</label>
          <input
            type="time"
            id="time-input"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default CustomerAppointment;
