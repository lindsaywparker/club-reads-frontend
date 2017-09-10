import React, { Component } from 'react';
// import apiKey from '../../api';
// var parseString = require('xml2js').parseString;

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
    
    // 
    // fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchValue}`, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then(res => res.text())
    //   .then((data) => {
    //     parseString(data, (err, result) => {
    //       const bookResults = result.GoodreadsResponse.search[0].results[0].work;
    //       bookResults.map(book => {
    //         
    //       })
    //     });
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
