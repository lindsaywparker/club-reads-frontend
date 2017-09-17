import React, { Component } from 'react';

export default class SignUpForm extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      input: '',
      clubs: [],
      clubSelection: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://clubreads-api.herokuapp.com/api/v1/club')
      .then(res => res.json())
      .then(clubs => this.setState({ clubs }))
      .catch(err => console.log({ err }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.state.input;
    fetch('/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        club_id: this.state.clubSelection,
      }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) throw new Error('A user with this email already exists');
        this.props.getUserId(data.user.id, this.state.clubSelection);
        this.props.history.push(`/clubpage/${data.user.club_id}`);
      })
      .catch((data) => {
        document.querySelector('.msg-to-user').innerHTML = data;
      });
  }

  render() {
    return (
      <div className="signup-component">
        <h1 className="logo">club<span className="logo-accent">reads</span></h1>
        <form className="signup-form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="signup-email-input">E-Mail Address:</label>
          <input
            id="signup-email-input"
            className="signup-email-input"
            type="email"
            required
            value={this.state.input}
            placeholder="E-Mail"
            onChange={event => this.setState({ input: event.target.value })}
          />
          <label htmlFor="club-dropdown">Club:</label>
          <select
            name="club-dropdown"
            id="club-dropdown"
            defaultValue="Select a club..."
            onChange={event => this.setState({ clubSelection: parseInt(event.target.value) })}
          >
            <option disabled>Select a club...</option>
            {this.state.clubs.map(club => <option key={club.id} value={club.id}>{club.name}</option>)}
          </select>

          <input
            type="submit"
            className="form-btn signup-submit-btn"
            value="Sign Up"
          />
        </form>
        <p className="msg-to-user"></p>
      </div>
    );
  }
}
