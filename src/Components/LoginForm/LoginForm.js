import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const email = this.state.input;
    // post fetch request with email
    fetch('/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          document.querySelector('.msg-to-user').innerHTML = data.error;
        } else {
          // otherwise => redirect
          // this.props.history.push(':/club_name')
        }
      });
  }

  render() {
    return (
      <div className="login-component">
        <h1 className="logo">club<span className="logo-accent">reads</span></h1>
        <form className="login-form" onSubmit={e => this.handleLogin(e)}>
          <input
            className="login-email-input"
            type="email"
            required
            value={this.state.input}
            placeholder="email"
            onChange={event => this.setState({ input: event.target.value })}
          />
          <container className="login-btns">
            <input
              type="submit"
              className="login-btn"
              value="login"
            />
            <NavLink to="/signup">sign up</NavLink>
          </container>
          <div className="msg-to-user"></div>
        </form>
      </div>
    );
  }
}
