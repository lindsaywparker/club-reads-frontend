import React, { Component } from 'react';
import { parseString } from 'xml2js';
import apiKey from '../../api';
import searchResultCleaner from '../../helpers/searchResultCleaner';
import SearchForm from '../SearchForm/SearchForm';
import BookCard from '../BookCard/BookCard';
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.fetchBooks = this.fetchBooks.bind(this);
  }

  fetchBooks(searchValue) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchValue}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.text())
      .then((data) => {
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
        <SearchResultsContainer books={this.state.books} {...this.props} />
      </div>
    );
  }
}
