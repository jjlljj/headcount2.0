import React, { Component } from 'react';
import Card from '../Card/Card'
import './CardDisplay.css';

const CardDisplay = ({ cards, compareCard }) => {

  const cardKeys = Object.keys(cards)

  const renderedCards = cardKeys.map( key => return

   ( <Card key={cards[key].location} card={cards[key]} clickHandler={compareCard}/> ))
  }

  return (
    <div className="card-display"> 
      { renderedCards }
    </div>
  );

}

export default CardDisplay;
