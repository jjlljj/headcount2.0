import React, { Component } from 'react';
import './Card.css';

const Card = ({ card }) => {
  const { location, data } = card
  const dataKeys = Object.keys(data)

  const renderedData = dataKeys.map( dp => {
    return (
      <li>
        {dp} : {data[dp]}
      </li>
    )
  })

  return (
    <div>
      <h5>{location}</h5>
      { renderedData } 
    </div>
  )
}

export default Card;
