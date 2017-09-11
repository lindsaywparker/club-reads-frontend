import React from 'react';

const SuggestedBooksContainer = ({activeClub}) => {
  
  const fetchClub = () => {
    fetch('/api/v1/club')
      .then(res => res.json())
      .then(club => {console.log(club)})
  };
  
  return (
    <div>
      <h1 className="suggested-books-container">Suggested Books</h1>
      <p className="suggestion-instructoins">Vote for which books you would like to read</p>
      <p className="suggestion-instructoins">Thumbs UP for books you like and thumbs DOWN for books you don't</p>
      {fetchClub()}
    </div>
  )
}

export default SuggestedBooksContainer;