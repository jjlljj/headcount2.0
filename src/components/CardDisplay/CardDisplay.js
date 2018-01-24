import React, { Component } from 'react';
import Card from '../Card/Card'
import './CardDisplay.css';

const CardDisplay = ({ cards }) => {

  const cardKeys = Object.keys(cards)

  const renderedCards = cardKeys.map( key => ( <Card key={cards[key].location} card={cards[key]} /> ))

  return (
    <div className="card-display"> 
      { renderedCards }
    </div>
  );

}

export default CardDisplay;
