import React from 'react';
import marcFittLogo from '../../images/logo.png';
import './header.css';

const Header = () => (
  <div className="row align-middle align-justify header-container">
    <img className="header-logo" src={marcFittLogo} />
  </div>
);

export default Header;