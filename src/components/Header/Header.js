import React from 'react';
import { func } from 'prop-types';
import ControlForm from '../ControlForm/ControlForm';
import './Header.css';

const Header = ({ handleSearch }) => {
  return (
    <header className="site-header">
      <h3>HeadCount2.0</h3>
      <ControlForm handleSearch={handleSearch} />
    </header>
  );
};

Header.propTypes = {
  handleSearch: func.isRequired
};

export default Header;