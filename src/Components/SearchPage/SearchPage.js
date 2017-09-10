import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';

const SearchPage = () => (
  <div className="search-page-component">
    <Header />
    <h2 className="suggest-book">Suggest a book</h2>
    <SearchForm />
  </div>
);

export default SearchPage;