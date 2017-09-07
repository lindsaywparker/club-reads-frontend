import React from 'react';

const Header = () => (
  <header className="header-component">
    <h1 className="logo">club<span className="logo-accent">reads</span></h1>
    <nav className="nav-link-container">
      <a className="nav-link" href="#">Suggest a Book</a>
      <a className="nav-link" href="#">Logout</a>
    </nav>
  </header>
);

export default Header;
