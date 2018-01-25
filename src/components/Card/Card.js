import React, { Component } from 'react';
import './Card.css';

const Card = ({ card, clickHandler }) => {
  const { location, data } = card
  const dataKeys = Object.keys(data)
  
  let highlight = false
  const classList =  highlight ? "highlighted data-card" : "data-card" 

  const renderedData = dataKeys.map( dp => {
    const dataStyle = data[dp] <= 0.5 ? 'red' : 'blue' 
    return (
      <li key={dp} >
        {dp} : <span className={dataStyle}>{data[dp]}</span>
      </li>
    )
  })

  return (

    <div  className={"data-card"}
          onClick={() => clickHandler(location)}>
      <h5>{location}</h5>
      <ul>
        { renderedData } 
      </ul>
    </div>
  )
}

export default Card;
