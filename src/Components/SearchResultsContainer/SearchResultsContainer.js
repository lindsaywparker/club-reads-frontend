import React from 'react';
import Header from '../Header/Header';
import BookCard from '../BookCard/BookCard';

const SearchResultsContainer = ({ books }) => (
  <div className="search-results-component">
    { books.map((book, i) =>
      <BookCard key={i} book={book} />,
    )}
  </div>
);

export default SearchResultsContainer;