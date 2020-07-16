import React from "react";
import "./card.styles.css";

const Card = ({ candidate }) => {
  const { id, name, website } = candidate;
  return (
    <div className="card-container" key={id}>
      <div className="rating-container">
        <div className="star-container">
          <div>{website}</div>
        </div>
      </div>
      <div>
        <img
          className="credit-card-chip"
          alt="card-chip"
          src="https://img.icons8.com/office/80/000000/sim-card-chip.png"
        />
      </div>
      <div className="candidate-name">{name}</div>
    </div>
  );
};

export default Card;
