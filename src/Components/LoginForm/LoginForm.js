import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
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
          this.props.getUserId(data.user.id, data.user.club_id);
          this.props.history.push(`/clubpage/${data.user.club_id}`);
        }
      });
  }

  render() {
    return (
      <div className="login-component">
        <h1 className="logo">club<span className="logo-accent">reads</span></h1>
        <form className="login-form" onSubmit={e => this.handleLogin(e)}>
          <label htmlFor="login-email-input">E-Mail Address:</label>
          <input
            id="login-email-input"
            className="login-email-input"
            type="email"
            required
            value={this.state.input}
            placeholder="E-Mail"
            onChange={event => this.setState({ input: event.target.value })}
          />
          <container className="login-btns">
            <input
              className="form-btn login-btn"
              type="submit"
              value="Login"
            />
            <NavLink className="form-btn signup-btn" to="/signup">Sign Up</NavLink>
          </container>
          <div className="msg-to-user"></div>
        </form>
      </div>
    );
  }
}
