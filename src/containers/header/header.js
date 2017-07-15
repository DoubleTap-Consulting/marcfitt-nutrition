import React from 'react';
import marcFittLogo from '../../images/logo.png';
import './header.css';

const Header = () => (
  <div className="row container-header">
    <img className="header-logo" src={marcFittLogo} height="30" width="202" />
  </div>
);

export default Header;
