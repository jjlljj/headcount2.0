import React, { Component } from 'react';
import ControlForm from '../ControlForm/ControlForm'
import './Header.css';

const Header = ({ handleSearch, compareDistrict }) => {
  return (
    <header className="site-header">
      <h3>HeadCount2.0</h3>
      <ControlForm handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
