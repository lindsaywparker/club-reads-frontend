import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (props) => {

  const logoutHandler = () => {
    props.getUserId(null, null);
    props.history.push('/');
  };

  const loggedInLinks = (
    <nav className="nav-link-container">
      <NavLink to={`/clubpage/${props.clubId}`} className="nav-link" activeClassName="selected">Club Page</NavLink>
      <NavLink to="/suggestbook" className="nav-link" activeClassName="selected">Suggest a Book</NavLink>
      <span role="link" tabIndex={0} onClick={() => logoutHandler()} className="nav-link">Logout</span>
    </nav>
  );

  return (
    <header className="header-component">
      <h1 className="logo">club<span className="logo-accent">reads</span></h1>
      {props.clubId ? loggedInLinks : null}
    </header>
  );
};

export default Header;
