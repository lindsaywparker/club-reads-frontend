import React from 'react';

const BookCard = ({ book, userId, clubId, pathname, suggested }) => {
  this.addBookToDB = (book) => {
    fetch('/api/v1/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        image: book.image,
        user_id: userId,
        club_id: clubId,
        goodreads_id: book.goodreads_id,
        avg_rating: book.avg_rating,
        ratings_count: book.ratings_count,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  this.handleVote = (userId, book, direction) => {
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
          .then(data => console.log(data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  this.handleSuggest = (e, book) => {
    this.addBookToDB(book);
    e.target.classList.add('added');
    e.target.textContent = 'Added!';
  };

  return (
    <div className="book-card-component">
      <div className="book-cover">
        <img src={book.image} alt="Book Cover" />
        <div className="vote-btns">
          {(pathname.startsWith('/clubpage/')) && userId &&
            <input
              type="button"
              value="down"
              className="down-vote"
              onClick={e => this.handleVote(userId, book, e.target.value)}
            />}
          {(pathname.startsWith('/clubpage/')) && userId &&
            <input
              type="button"
              value="up"
              className="up-vote"
              onClick={e => this.handleVote(userId, book, e.target.value)}
            />}
        </div>
      </div>
      <div className="book-info">
        <p className="book-title">{book.title}</p>
        <p className="book-author">by {book.author}</p>
        <p className="book-rating">Rating: {book.avg_rating}</p>
        <p className="book-rating-count">Number of Ratings: {book.ratings_count}</p>
      </div>
      <a className="goodreads-link" href={`https://www.goodreads.com/book/show/${book.goodreads_id}`} target="_blank">View on Goodreads</a>
      {(pathname === '/suggestbook') &&
        <button className={suggested ? 'added' : null} onClick={e => this.handleSuggest(e, book)}>
          {suggested ? 'Added!' : 'Suggest'}
        </button>}
    </div>
  );
};

export default BookCard;
