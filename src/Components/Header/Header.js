import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = props => (
  <header className="header-component">
    <h1 className="logo">club<span className="logo-accent">reads</span></h1>
    <nav className="nav-link-container">
      <NavLink to={`/clubpage/${props.clubId}`} className="nav-link" activeClassName="selected">Club Page</NavLink>
      <NavLink to="/suggestbook" className="nav-link" activeClassName="selected">Suggest a Book</NavLink>
      <a className="nav-link" href="#">Logout</a>
      <NavLink to="/" className="nav-link" activeClassName="selected">Login</NavLink>
    </nav>
  </header>
);

export default Header;
