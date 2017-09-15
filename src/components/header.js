import React, { Component } from 'react';
import logo from '../logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Banking Lab</h2>
        </div>
      </div>
    );
  }
}

export default Header;
