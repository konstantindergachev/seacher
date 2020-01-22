import React from 'react';
import Card from '../card/Card';
import './CardList.scss';

const CardList = ({ cards }) => {
  return (
    <div className="cards">
      {cards.length > 0 ? (
        cards.map((monster) => (
          <Card
            key={monster.id}
            name={monster.name}
            img={monster.img}
            email={monster.email}
          />
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default CardList;
