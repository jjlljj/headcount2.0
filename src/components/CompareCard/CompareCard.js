import React, { Component } from 'react';
import './CompareCard.css';

const CompareCard = ({ card }) => {
  const cardKeys = Object.keys(card)
  const { compared } = card

  return (
    <div className="data-card">
      <h2>Compared Districts</h2>
      <div>
        <h3>{cardKeys[0]}</h3>
        <p>{card[cardKeys[0]]}</p>
      </div>  
      <div>
        <h2>Ratio</h2>
        <p>{compared}</p>
      </div>
      <div>
        <h3>{cardKeys[1]}</h3>
        <p>{card[cardKeys[1]]}</p>
      </div>

    
    </div>
  )
}

export default CompareCard;
