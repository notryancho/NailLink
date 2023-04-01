import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>${service.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ServiceCard;
