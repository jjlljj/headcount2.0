import React from 'react';
import propTypes, { object, func, string, shape } from 'prop-types';
import Card from '../Card/Card';
import './CardDisplay.css';

const CardDisplay = ({ cards, compareCard, selected }) => {

  const cardKeys = Object.keys(cards);
  const renderedCards = cardKeys.map( key => { 
    let highlight;
    if (key === selected.card1 || key === selected.card2) {
      highlight = true;
    }

    return ( 
      <Card 
        key={cards[key].location} 
        card={cards[key]} 
        clickHandler={compareCard} 
        highlight={highlight}/> 
    );
  });

  return (
    <div className="card-display"> 
      { renderedCards }
    </div>
  );

};

CardDisplay.propTypes = {
  cards: shape({
    data: propTypes.arrayOf(propTypes.object).isRequired,
    location: string.isRequired
  }),
  clickHandler: func,
  selected: object,
  compareCard: func
};

export default CardDisplay;