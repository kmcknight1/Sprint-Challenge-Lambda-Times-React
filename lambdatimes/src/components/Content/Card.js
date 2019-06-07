import React from "react";
import PropTypes from "prop-types";

function Card({ card }) {
  console.log(card);

  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt="user-photo" />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.object)
};

export default Card;
