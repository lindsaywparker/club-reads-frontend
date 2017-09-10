import React, { Component } from 'react';
import apiKey from '../../../api';
var parseString = require('xml2js').parseString;

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
    const searchValue = this.state.input;
    // fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchValue}`, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then((res) => {
    //     const contentType = res.headers.get('content-type')
    //     console.log(contentType);
    //     if (contentType.includes('application/xml')) {
    //       return parseString(res, (err, res) => {
    //     });
    //     }
    //   })
    //   .then(data => console.dir(data));
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
