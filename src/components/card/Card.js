import React from 'react';
import './Card.scss';

const Card = ({ name, img, email }) => {
  return (
    <div className="card__container">
      <img className="card__img" src={img} alt={name} />
      <div>
        <p className="card__name">{name}</p>
        <p className="card__email">{email}</p>
      </div>
    </div>
  );
};

export default Card;
