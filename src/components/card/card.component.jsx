import React from "react";
import "./card.styles.css";

const Card = ({ candidate }) => {
  const { id, firstName, lastName, creditIndicator } = candidate;
  return (
    <div className="card-container" key={id}>
      <div className="candidate-name">
        {firstName} {lastName}
      </div>
      <div className="rating-container">
        <div className="star-container">
          <div>{creditIndicator}</div>
          <div className="star">
            <img
              alt="star"
              src="https://img.icons8.com/doodle/48/000000/star--v1.png"
            />
          </div>
        </div>
        <div className="credit-score">Credit Score</div>
      </div>
    </div>
  );
};

export default Card;
