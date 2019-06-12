import React from "react";
import Card from "./Card";

function Cards({ cards }) {
  console.log(cards);

  return (
    <div className="cards-container">
      {cards.map(card => {
        return <Card card={card} />;
      })}
      {console.log(cards)}
    </div>
  );
}

export default Cards;
