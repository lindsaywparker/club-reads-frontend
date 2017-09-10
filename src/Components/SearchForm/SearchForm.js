import React, { Component } from 'react';

export default class SearchFrom extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    console.log('search clicked!');
    // const email = this.state.input;
    // // post fetch request with email
    // fetch('/api/v1/user/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then((data) => {
    //     if (data.error) {
    //       document.querySelector('.msg-to-user').innerHTML = data.error;
    //     } else {
    //       // otherwise => redirect
    //       // this.props.history.push(':/club_name')
    //     }
    //   });
  }

  render() {
    return (
      <div className="search-form-component">
        <form className="search-form" onSubmit={e => this.handleSearch(e)}>
          <input
            className="search-input"
            type="text"
            required
            value={this.state.input}
            placeholder="search"
            onChange={event => this.setState({ input: event.target.value })}
          />
            <input
              type="submit"
              className="search-btn"
              value="search"
            />
        </form>
      </div>
    );
  }
}
