import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CustomerAppointment = ({ user }) => {
  const [nailTechs, setNailTechs] = useState([]);
  const [selectedNailTech, setSelectedNailTech] = useState("");
  const [selectedNailTechObj, setSelectedNailTechObj] = useState({});
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceObj, setSelectedServiceObj] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch nail techs and their services from the backend
    axios.get("http://127.0.0.1:5000/all-nailtechs").then((response) => {
      setNailTechs(response.data)
    }, []);

    // Fetch services from the backend
    axios.get("http://127.0.0.1:5000/all-services").then((response) => {
      setServices(response.data)
    });
  }, []);

  const handleNailTechChange = (event) => {
    setSelectedNailTech(event.target.value);
    const selectedNailTechObj = nailTechs.find((nailTech) => nailTech._id.$oid === event.target.value);
    setSelectedNailTechObj(selectedNailTechObj);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    const selectedServiceObj = services.find((service) => service._id.$oid === event.target.value);
    setSelectedServiceObj(selectedServiceObj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Format the time to HH:MM:SS format in 24-hour clock
    const formattedTime = new Date(`01/01/2001 ${time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

    // Create a new appointment by sending a POST request to the backend
    axios
      .post("http://127.0.0.1:5000/all-appointments", {
        customer_id: user ? user._id.$oid : null,
        customer_name: user.name,
        nail_tech_id: selectedNailTech,
        nail_tech_name: selectedNailTechObj.name,
        appt_date: date,
        appt_time: formattedTime,
        service_id: selectedService,
        service_name: selectedServiceObj.name,
        service_price: selectedServiceObj.price.toString(),
        status: "booked",
      })
      .then(() => {
        // Navigate the user to the customer dashboard
        navigate("/customer-dashboard");
      })
      .catch((error) => {
        console.log(error);
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
            onChange={handleNailTechChange}
            value={selectedNailTech}
            required
          >
            <option value="">Choose a Nail Technician</option>
            {nailTechs.map((nailTech) => (
              <option key={nailTech._id.$oid} value={nailTech._id.$oid}>
                {nailTech.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service-select">Select a Service:</label>
          <select
            id="service-select"
            onChange={handleServiceChange}
            value={selectedService}
            required
          >
            <option value="">Choose a Service</option>
            {services.map((service) => (
              <option key={service._id.$oid} value={service._id.$oid}>
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
        
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default CustomerAppointment;
