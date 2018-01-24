import React, { Component } from 'react';
import './Card.css';

const Card = ({ card }) => {
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
    <div className="data-card">
      <h5>{location}</h5>
      <ul>
      { renderedData } 
      </ul>
    </div>
  )
}

export default Card;
