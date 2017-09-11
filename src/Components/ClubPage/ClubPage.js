import React from 'react';

import SuggestedBooksContainer from '../SuggestedBooksContainer/SuggestedBooksContainer'

const ClubPage = (props) => (
  
  <div className="club-page-component">
    <h1>THIS IS THE CLUB PAGE!! =)</h1>
    <SuggestedBooksContainer activeClub={props.match.params.club_name}/>
  </div>
);

export default ClubPage;
