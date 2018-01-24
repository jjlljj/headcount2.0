import React, { Component } from 'react';
import './Card.css';

const Card = ({ card, compareCard }) => {
  const { location, data } = card
  const dataKeys = Object.keys(data)

  const renderedData = dataKeys.map( dp => {
    const dataStyle = data[dp] <= 0.5 ? 'red' : 'blue' 
    return (
      <li key={dp} >
        {dp} : <span className={dataStyle}>{data[dp]}</span>
      </li>
    )
  })

  return (
    <div className="data-card">
      <h5>{location}</h5>
      <ul>
        { renderedData } 
        <button onClick={() => compareCard(location)}>Compare Me</button>
      </ul>
    </div>
  )
}

export default Card;
