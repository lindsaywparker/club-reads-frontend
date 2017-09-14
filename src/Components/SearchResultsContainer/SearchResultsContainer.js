import React from 'react';
import Header from '../Header/Header';
import BookCard from '../BookCard/BookCard';

const SearchResultsContainer = ({ books, userInfo, pathname, suggestedBooks }) => {
  const suggestedBooksIds = suggestedBooks.map(book => book.goodreads_id);
  const bookResults = books.map(book =>
    (<BookCard
      key={book.goodreads_id}
      book={book}
      userId={userInfo.user_id}
      clubId={userInfo.club_id}
      pathname={pathname}
      suggested={suggestedBooksIds.includes(book.goodreads_id)}
    />),
  );

  return (<div className="search-results-component">
    {bookResults}
  </div>);
};

export default SearchResultsContainer;
