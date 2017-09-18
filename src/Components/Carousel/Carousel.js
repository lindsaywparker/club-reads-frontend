import React from 'react';

const Carousel = ({readBooks, currentBook}) => {
  const readBookCards = readBooks
    .sort((a, b) => a.updated_at < b.updated_at)
    .slice(0, 5)
    // .reverse()
    .map((book, i) => {
      const style = {
        backgroundImage: `url(${book.image})`,
      };

      return (
        <div key={`read-book-${book.id}`} className="carousel-card read-book">
          {i === 0 && <p className="current-label">Recently Read:</p>}
          <div className="card-background" style={style}></div>
          <img src={book.image} alt="book cover" />
          <p className="book-title">{book.title}</p>
          <p className="book-author">By: {book.author}</p>
          <p className="book-rating">Rating: {book.avg_rating}</p>
          <p className="book-rating-count">Number of Ratings: {book.ratings_count}</p>
          <a href={`https://www.goodreads.com/book/show/${book.goodreads_id}`}>View on Goodreads</a>
        </div>
      );
    });

  const currentBookCard = currentBook ? (
    <div className="carousel-card current-book">
      <p className="current-label">Currently Reading:</p>
      <div className="card-background" style={{backgroundImage: `url(${currentBook.image})`}}></div>
      <img src={currentBook.image} alt="book cover" />
      <p className="book-title">{currentBook.title}</p>
      <p className="book-author">By: {currentBook.author}</p>
      <p className="book-rating">Rating: {currentBook.avg_rating}</p>
      <p className="book-rating-count">Number of Ratings: {currentBook.ratings_count}</p>
      <a href={`https://www.goodreads.com/book/show/${currentBook.goodreads_id}`}>View on Goodreads</a>
    </div>
  ) : null;

  return (
    <div className="carousel-component">
      {currentBook && currentBookCard}
      {/* {readBooks.length !== 0 && readBookCards} */}
      {readBookCards}
    </div>
  );
};

export default Carousel;
