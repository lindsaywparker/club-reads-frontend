import React, { Component } from 'react';

import BookCard from '../../Components/BookCard/BookCard';

export default class SuggestedBooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch(`/api/v1/book?club_id=${this.props.clubId}`)
      .then(res => res.json())
      .then(books => this.setState({ books }))
      .catch(err => console.log({ err }));
  }

  render() {
    const bookResults = this.state.books.map(book => (
      <BookCard
        key={book.goodreads_id}
        book={book}
        userId={this.props.userId}
        clubId={this.props.clubId}
        pathname={this.props.pathname}
      />));

    return (
      <div>
        <h1 className="suggested-books-container">Suggested Books</h1>
        <p className="suggestion-instructions">
          Vote for which books you would like to read
        </p>
        <p className="suggestion-instructions">
          Thumbs UP for books you like and thumbs DOWN for books you don't
        </p>
        {bookResults}
      </div>
    );
  }
}
