import React from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

function CardList({ filteredCandidates }) {
  console.log(filteredCandidates);
  return (
    <div className="candidate-cards-container">
      {filteredCandidates.map((candidate, index) => (
        <Card key={index} candidate={candidate}></Card>
      ))}
    </div>
  );
}

export default CardList;
