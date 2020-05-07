import React from "react";
import "./card.styles.css";

const Card = ({ candidate }) => {
  const { id, firstName, lastName, creditIndicator } = candidate;
  return (
    <div className="card-container" key={id}>
      <div className="candidate-name">
        {firstName} {lastName}
      </div>
      <div>{creditIndicator}</div>
    </div>
  );
};

export default Card;
