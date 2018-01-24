import React, { Component } from 'react';
import ControlForm from '../ControlForm/ControlForm'
import './Header.css';

const Header = ({ handleSearch, compareDistrict }) => {
  console.log(compareDistrict)
  return (
    <div>
      <h3>ALL OF THE DATA</h3>
      <ControlForm handleSearch={handleSearch} />
      <h5>{compareDistrict}</h5>
    </div>
  );

}

export default Header;
