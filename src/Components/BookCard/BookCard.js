/* eslint-disable class-methods-use-this */
import React, {Component} from 'react';

class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: props.book.upvotes,
      downVotes: props.book.downvotes,
    };
    this.addBookToDB = this.addBookToDB.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.handleSuggest = this.handleSuggest.bind(this);
  }

  addBookToDB(book) {
    fetch('/api/v1/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        image: book.image,
        user_id: this.props.userId,
        club_id: this.props.clubId,
        goodreads_id: book.goodreads_id,
        avg_rating: book.avg_rating,
        ratings_count: book.ratings_count,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  handleVote(userId, book, direction) {
    fetch('/api/v1/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        direction,
        user_id: userId,
        book_id: book.id,
      }),
    })
      .then(res => res.json())
      .then((res) => {
        if (res.error) throw new Error(res.error.detail);
        fetch(`/api/v1/book?id=${book.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            direction,
          }),
        })
          .then(() => {
            this.setState({
              [`${direction}Votes`]: this.state[`${direction}Votes`] + 1
            })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  handleSuggest(e, book) {
    this.addBookToDB(book);
    e.target.classList.add('added');
    e.target.textContent = 'Added!';
  }

  render() {
    return (
      <div className="book-card-component">
        <div className="book-cover">
          <img src={this.props.book.image} alt="Book Cover" />
          <div className="vote-btns">
            {(this.props.pathname.startsWith('/clubpage/')) && this.props.userId &&
              <input
                type="button"
                value="down"
                className="down-vote"
                onClick={e => this.handleVote(this.props.userId, this.props.book, e.target.value)}
              />}
            {(this.props.pathname.startsWith('/clubpage/')) && this.props.userId &&
              <input
                type="button"
                value="up"
                className="up-vote"
                onClick={e => this.handleVote(this.props.userId, this.props.book, e.target.value)}
              />}
          </div>
          <div className="vote-counts">
            {(this.props.pathname.startsWith('/clubpage/')) && this.props.userId &&
              <p className="down-vote-count">{this.state.downVotes}</p>}
            {(this.props.pathname.startsWith('/clubpage/')) && this.props.userId &&
              <p className="up-vote-count">{this.state.upVotes}</p>}
          </div>
        </div>
        <div className="book-info">
          <p className="book-title">{this.props.book.title}</p>
          <p className="book-author">by {this.props.book.author}</p>
          <p className="book-rating">Rating: {this.props.book.avg_rating}</p>
          <p className="book-rating-count">Number of Ratings: {this.props.book.ratings_count}</p>
        </div>
        <a className="goodreads-link" href={`https://www.goodreads.com/book/show/${this.props.book.goodreads_id}`}target="_blank">View on Goodreads</a>
        {(this.props.pathname === '/suggestbook') &&
          <button className={this.props.suggested ? 'added' : null} onClick={e => this.handleSuggest(e, this.props.book)}>
            {this.props.suggested ? 'Added!' : 'Suggest'}
          </button>}
      </div>
    );
  }
}

export default BookCard;
