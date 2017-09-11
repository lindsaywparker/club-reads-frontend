import React from 'react';

const BookCard = ({ book }) => {
  this.addBookToDB = (book) => {
    fetch('/api/v1/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: book.title,
        author: book.authors,
        image: book.image_url,
        user_id: 1,
        club_id: 1,
        goodreads_id: book.goodreads_id,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data)) // TODO: add sucess message to DOM
      .catch(err => console.log(err));
  };

  return (
    <div className="book-card-component">
      <img src={book.image_url} alt="Book Cover" />
      <div className="book-info">
        <p>Title: {book.title}</p>
        <p>Author: {book.authors}</p>
        <p>Rating: {book.avg_rating}</p>
        <p>Number of Ratings: {book.ratings_count}</p>
        <p>Description: Hi Im a description</p>
      </div>
      <a href={`https://www.goodreads.com/book/show/${book.book_id}`} target="_blank">View on Goodreads</a>
      <button onClick={() => this.addBookToDB(book)}>
        Suggest
      </button>
    </div>
  );
};

export default BookCard;
