import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <h3>{review.customer.name}</h3>
      <p>{review.rating} STARS</p>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
