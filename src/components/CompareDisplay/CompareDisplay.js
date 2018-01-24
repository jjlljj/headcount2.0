import React, { Component } from 'react';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard'
import './CompareDisplay.css';

const CompareDisplay = ({ card1, comparison, card2, removeCard }) => {

  return (
    <section className="compare-display"> 
      { card1 &&
        <Card card={card1} clickHandler={removeCard}/>
      }
      {
        
        <CompareCard card={comparison} />
      }
      { card2 &&
        <Card card={card2} clickHandler={removeCard}/>
      }
    </section>
  );

}

export default CompareDisplay;
