import React, { Component } from 'react';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    return (
      <div className="signup-component">
        <h1 className="logo">club<span className="logo-accent">reads</span></h1>
        <form className="signup-form" onSubmit={() => console.log("What's up you clicked the Sign Up button!")}>
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
