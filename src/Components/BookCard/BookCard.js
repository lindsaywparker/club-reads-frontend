import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card-component">
      <img src={book.image_url} alt="Book Cover" />
      <div className="book-info">
        <p>Title: {book.title}</p>
        <p>Author: {book.authors[0]}</p>
        <p>Rating: {book.avg_rating}</p>
        <p>Number of Ratings: {book.ratings_count}</p>
        <p>Description: Hi Im a description</p>
      </div>
      <button onClick={() => console.log('You clicked suggest! Good for you!')}>
        Suggest
      </button>
    </div>
  )
};

export default BookCard;