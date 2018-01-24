import React, { Component } from 'react';
import './Card.css';

const Card = ({ card, compareCard }) => {
  const { location, data } = card
  const dataKeys = Object.keys(data)

  const renderedData = dataKeys.map( dp => {
    return (
      <li key={dp} >
        {dp} : {data[dp]}
      </li>
    )
  })

  return (
    <div>
      <h5>{location}</h5>
      { renderedData } 
      <button onClick={() => compareCard(location)}>Compare Me</button>
    </div>
  )
}

export default Card;
