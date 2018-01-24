import React, { Component } from 'react';
import ControlForm from '../ControlForm/ControlForm'
import './Header.css';

const Header = ({ handleSearch, compareDistrict }) => {
  console.log(compareDistrict)
  return (
    <header className="site-header">
      <h3>schoolData</h3>
      <ControlForm handleSearch={handleSearch} />
      <h5>{compareDistrict}</h5>
    </header>
  );
}

export default Header;
