import React from 'react';
import { oneOfType, string, object } from 'prop-types';
import './CompareCard.css';

const CompareCard = ({ card }) => {
  const cardKeys = Object.keys(card);
  const { compared } = card;

  return (
    <div className="data-card compare-card">
      <h2>Compared Districts</h2>
      <div>
        <h3>{cardKeys[0]}</h3>
        <p> &#8678; {card[cardKeys[0]]}</p>
      </div>  
      <div>
        <h4>Ratio</h4>
        <p>{compared}</p>
      </div>
      <div>
        <h3>{cardKeys[1]}</h3>
        <p>{card[cardKeys[1]]} &#8680;</p>
      </div>  
    </div>
  );
};

CompareCard.propTypes = {
  card: oneOfType( [object, string] )
};

export default CompareCard;
