import React, { Component } from 'react';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard'
import './CompareDisplay.css';

const CompareDisplay = ({ card1, comparison, card2, removeCard }) => {

  return (
    <section className="compare-display"> <div className="compare-container">
        { card1 &&
          <Card card={card1} clickHandler={removeCard}/>
        }
      </div>  
      <div className="compare-container">
      {
        
        <CompareCard card={comparison} />
      }
      </div>  
      <div className="compare-container">
      { card2 &&
        <Card card={card2} clickHandler={removeCard}/>
      }
      </div>  
    </section>
  );

}

export default CompareDisplay;
