import React, { Component } from 'react';
import { parseString } from 'xml2js';

import apiKey from '../../api';
import searchResultCleaner from '../../helpers/searchResultCleaner';
import SearchForm from '../SearchForm/SearchForm';
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      suggestedBooks: [],
      loading: false,
    };

    this.fetchBooks = this.fetchBooks.bind(this);
  }

  fetchBooks(searchValue) {
    this.setState({ loading: true });
    fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchValue}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.text())
      .then((data) => {
        fetch(`/api/v1/book?club_id=${this.props.userInfo.club_id}`)
          .then(data => data.json())
          .then((suggestedBooks) => {
            this.setState({
              suggestedBooks,
              loading: false,
            });
          })
          .catch(err => console.log({ err }));

        parseString(data, (err, result) => {
          const bookResults = searchResultCleaner(result.GoodreadsResponse.search[0].results[0].work);
          this.setState({ books: bookResults });
        });
      });
  }

  render() {
    return (
      <div className="search-page-component">
        <h2 className="suggest-book">Suggest a book</h2>
        <SearchForm fetchBooks={this.fetchBooks} />
        {this.state.loading && <img src="./assets/loader.gif" alt="Loading..." />}
        <SearchResultsContainer
          books={this.state.books}
          suggestedBooks={this.state.suggestedBooks}
          pathname={this.props.history.location.pathname}
          {...this.props}
        />
      </div>
    );
  }
}
