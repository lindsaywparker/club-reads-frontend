import React from 'react';

import SuggestedBooksContainer from '../SuggestedBooksContainer/SuggestedBooksContainer'

const ClubPage = ({ userInfo, match, history }) => (
  <div className="club-page-component">
    <h1>THIS IS THE CLUB PAGE!! =)</h1>
    <SuggestedBooksContainer
      userId={userInfo.user_id}
      clubId={parseInt(match.params.club_id, 10)}
    />
  </div>
);

export default ClubPage;
