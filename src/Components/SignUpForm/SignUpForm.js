import React, { Component } from 'react';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.state.input;
    // post fetch request with email
    fetch('/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then(res => res.json());
  }

  render() {
    return (
      <div className="signup-component">
        <h1 className="logo">club<span className="logo-accent">reads</span></h1>
        <form className="signup-form" onSubmit={e => this.handleSubmit(e)}>
          <input
            className="signup-email-input"
            type="email"
            required
            value={this.state.input}
            placeholder="email"
            onChange={event => this.setState({ input: event.target.value })}
          />
          <div className="dropdown-container">
            <label htmlFor="club-dropdown">
              Club:
              <select name="club-dropdown" id="club-dropdown" />
            </label>
          </div>
          <input
            type="submit"
            className="signup-btn"
            value="sign up"
          />
        </form>
      </div>
    );
  }
}
