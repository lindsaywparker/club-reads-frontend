import React from 'react';
import Header from '../Header/Header';
import BookCard from '../BookCard/BookCard';

const SearchResultsContainer = ({ books, userInfo, pathname }) => (
  <div className="search-results-component">
    {books.map(book =>
      (<BookCard
        key={book.goodreads_id}
        book={book}
        userId={userInfo.user_id}
        clubId={userInfo.club_id}
        pathname={pathname}
      />),
    )}
  </div>
);

export default SearchResultsContainer;
