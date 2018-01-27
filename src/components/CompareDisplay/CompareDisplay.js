import React from 'react';
import { oneOfType, string, func, object } from 'prop-types';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard';
import './CompareDisplay.css';

const CompareDisplay = ({ card1, comparison, card2, removeCard }) => {

  return (
    <section className="compare-display"> 
      <div className="compare-container">
        { card1 &&
          <Card card={card1} clickHandler={removeCard} highlight="true"/>
        }
      </div>  
      <div className="compare-container">
        <CompareCard card={comparison} />
      </div>  
      <div className="compare-container">
        { card2 &&
          <Card card={card2} clickHandler={removeCard} highlight="true"/>
        }
      </div>  
    </section>
  );

};

CompareDisplay.propTypes = {
  card1: oneOfType( [object, string] ),
  comparison: oneOfType( [object, string] ),
  card2: oneOfType( [object, string] ),
  removeCard: func
};



export default CompareDisplay;
