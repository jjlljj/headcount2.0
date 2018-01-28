import React from 'react';
import { oneOfType, string, func, object } from 'prop-types';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard';
import './CompareDisplay.css';

const CompareDisplay = ({ card1, comparison, card2, removeCard }) => {

  let classList1 = card1  ? "compare-container show" : "compare-container";
  let classList2 = card2 ? "compare-container show" : "compare-container";
  let classListCompare = comparison ? 
    "compare-container show" : "compare-container";

  return (
    <section> 
      <div className="compare-display">
        <div className={classList1}>
          { card1 &&
            <Card card={card1} clickHandler={removeCard} highlight={true}/>
          }
        </div>  
        <div className={classListCompare}>
          { comparison &&
            <CompareCard card={comparison} />
          }
        </div>

        <div className={classList2}>
          { card2 &&
            <Card card={card2} clickHandler={removeCard} highlight={true}/>
          }
        </div>
      </div>
      <div className="compare-instructions">
        <h5>Click cards to select for comparison</h5>
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
