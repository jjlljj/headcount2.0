import React, { Component } from 'react';
import propTypes, { string, func} from 'prop-types'
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard'
import './CompareDisplay.css';

const CompareDisplay = ({ card1, comparison, card2, removeCard }) => {

  return (
    <section className="compare-display"> <div className="compare-container">
        { card1 &&
          <Card card={card1} clickHandler={removeCard} highlight="true"/>
        }
      </div>  
      <div className="compare-container">
      {
        
        <CompareCard card={comparison} />
      }
      </div>  
      <div className="compare-container">
        { card2 &&
          <Card card={card2} clickHandler={removeCard} highlight="true"/>
        }
      </div>  
    </section>
  );

}

CompareDisplay.propTypes = {
  card1: string,
  comparison: string,
  card2: string,
  removeCard: func
}

export default CompareDisplay;
