import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    return (
      <div className="login-component">
        <h1 className="logo">club<span className="logo-accent">reads</span></h1>
        <form className="login-form">
          <input
            className="login-email-input"
            type="email"
            required
            value={this.state.input}
            placeholder="email"
            onChange={event => this.setState({ input: event.target.value })}
          />
          <button
            className="login-btn"
            onClick={() => console.log("What's up you clicked the login button!")}
          >
            login
          </button>
          {/* <NavLink
            to="/signup"
          >
            sign up
          </NavLink> */}
          
        </form>
      </div>
    );
  }
}
