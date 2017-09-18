import React, { Component } from 'react';

import BookCard from '../../Components/BookCard/BookCard';

export default class SuggestedBooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedBooks: [],
    };
  }

  componentDidMount() {
    fetch(`${this.props.apiUrl}/api/v1/book?club_id=${this.props.clubId}`)
      .then(res => res.json())
      .then((books) => {
        const suggestedBooks = books.filter(book => book.status === 'suggested')
          .sort((a, b) => b.upvotes - a.upvotes);
        this.setState({ suggestedBooks });
      })
      .catch(err => console.log({ err }));
  }

  render() {
    const bookResults = this.state.suggestedBooks.map(book => (
      <BookCard
        key={book.goodreads_id}
        book={book}
        userId={this.props.userId}
        clubId={this.props.clubId}
        pathname={this.props.pathname}
      />));

    return (
      <div className="suggested-books-container">
        <h1>Suggested Books</h1>
        <p className="suggestion-instructions">
          Vote for which books you would like to read
        </p>
        <p className="suggestion-instructions">
          Thumbs UP for books you like and thumbs DOWN for books you don't
        </p>
        <div className="suggested-books">
          {bookResults}
        </div>
      </div>
    );
  }
}
