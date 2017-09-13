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
        console.log('response',res)
        if(res.error) throw new Error(res.error.detail);
        fetch('/api/v1/book', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            direction,
            book_id: book.id,
          }),
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
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
      <img src={book.image} alt="Book Cover" />
      <div className="book-info">
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Rating: {book.avg_rating}</p>
        <p>Number of Ratings: {book.ratings_count}</p>
        <p>Description: Hi Im a description</p>
      </div>
      <a className="goodreads-link" href={`https://www.goodreads.com/book/show/${book.goodreads_id}`} target="_blank">View on Goodreads</a>
      {(pathname === '/suggestbook') &&
        <button className={suggested ? 'added' : null} onClick={e => this.handleSuggest(e, book)}>
          {suggested ? 'Added!' : 'Suggest'}
        </button>}
      <div>
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
  );
};

export default BookCard;
