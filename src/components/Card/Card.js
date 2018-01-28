import React from 'react';
import propTypes, { func, bool } from 'prop-types';
import './Card.css';

const Card = ({ card, clickHandler, highlight }) => {
  const { location, data } = card;
  const dataKeys = Object.keys(data);

  const classList =  highlight ? "highlight data-card" : "data-card";

  const renderedData = dataKeys.map( dp => {
    const dataStyle = data[dp] <= 0.5 ? 'red' : ' blue'; 
    const imgClass = data[dp] > 0.5 ? 'fa fa-check' : '';
    return (
      <li key={dp} >
        <i className={imgClass} aria-hidden="true"> </i>{dp} : <span className={dataStyle}>{data[dp]}</span>
        
      </li>
    );
  });

  return (

    <article  
      className={ classList }
      onClick={() => clickHandler(location)}>
      <h5>{location}</h5> 
      <ul>
        { renderedData } 
      </ul>
    </article>
  );
};

Card.propTypes = {
  card: propTypes.oneOfType([propTypes.string, propTypes.object]),
  clickHandler: func,
  highlight: bool
};

export default Card;


