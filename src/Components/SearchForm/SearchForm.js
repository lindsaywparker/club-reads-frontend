import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const searchValue = this.state.input;
    this.props.fetchBooks(searchValue);
    this.setState({ input: '' });
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
