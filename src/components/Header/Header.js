import React from 'react';
import { func } from 'prop-types';
import ControlForm from '../ControlForm/ControlForm';
import './Header.css';

const Header = ({ handleSearch }) => {
  return (
    <header className="site-header">
      <h3><i className="fa fa-users" aria-hidden="true"></i> HeadCount2.0</h3>
      <ControlForm handleSearch={handleSearch} />
    </header>
  );
};

Header.propTypes = {
  handleSearch: func.isRequired
};

export default Header;