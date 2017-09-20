import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import BookCard from './BookCard';

describe('BOOKCARD COMPONENT', () => {
  const book = {
    id: 30,
    title: 'Leviathan Wakes (The Expanse, #1)',
    author: 'James S.A. Corey',
    goodreads_id: '8855321',
    avg_rating: '4.20',
    ratings_count: '84809',
    image: 'https://images.gr-assets.com/books/1411013134m/8855321.jpg',
    upvotes: 1,
    downvotes: 0,
    status: 'suggested',
    user_id: 1,
    club_id: 1,
    created_at: '2017-09-18T20:32:33.875Z',
    updated_at: '2017-09-18T20:32:33.875Z',
  };

  fetchMock.get('/api/v1/vote?bookId=30&userId=1', [
    {
      id: 23,
      direction: 'up',
      user_id: 1,
      book_id: 30,
      created_at: '2017-09-19T02:36:01.774Z',
      updated_at: '2017-09-19T02:36:01.774Z',
    },
  ]);

  const wrapperClub = shallow(
    <BookCard
      key={book.goodreads_id}
      book={book}
      userId={1}
      clubId={1}
      pathname={'/clubpage/'}
      suggested={false}
      apiUrl={''}
    />,
  );

  const wrapperSuggest = shallow(
    <BookCard
      key={book.goodreads_id}
      book={book}
      userId={1}
      clubId={1}
      pathname={'/suggestbook'}
      suggested={false}
      apiUrl={''}
    />,
  );

  const wrapperSuggestAdded = shallow(
    <BookCard
      key={book.goodreads_id}
      book={book}
      userId={1}
      clubId={1}
      pathname={'/suggestbook'}
      suggested={true}
      apiUrl={''}
    />,
  );

  const resolveAfter2Seconds = () => (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  );

  it('should have initial state', () => {
    expect(wrapperClub.state()).toEqual({
      upVotes: 1,
      downVotes: 0,
      userVoted: false,
      userVoteDirection: null,
    });
  });

  describe('CLUBPAGE BOOKCARD', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BookCard
        key={book.goodreads_id}
        book={book}
        userId={1}
        clubId={1}
        pathname={'/clubpage/'}
        suggested={false}
        apiUrl={''}
      />, div);
    });

    it('should have voting buttons', () => {
      const voteBtns = wrapperClub.find('.vote-btns');
      expect(voteBtns.length).toEqual(1);
    });

    it('should have vote counts', () => {
      const voteCounts = wrapperClub.find('.vote-counts');
      expect(voteCounts.length).toEqual(1);
    });

    it('should update the vote direction in state when a vote button is clicked', async () => {
      fetchMock.post('/api/v1/vote', {});
      fetchMock.patch('/api/v1/book?id=30', { direction: 'down' });

      const downVoteBtn = wrapperClub.find('.down-vote');
      downVoteBtn.simulate('click', { target: { value: 'down' } });

      expect(wrapperClub.state().userVoteDirection).toEqual(null);

      await resolveAfter2Seconds();

      expect(wrapperClub.state().userVoteDirection).toEqual('down');
    });
  });

  describe('SUGGEST BOOKCARD', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BookCard
        key={book.goodreads_id}
        book={book}
        userId={1}
        clubId={1}
        pathname={'/suggestbook'}
        suggested={false}
        apiUrl={''}
      />, div);
    });

    it('should have a suggest button', () => {
      const suggestBtn = wrapperSuggest.find('button');
      expect(suggestBtn.props().children).toEqual('Suggest');
    });

    it('should have a suggest button with an active class if the book has been suggested', () => {
      const suggestBtn = wrapperSuggestAdded.find('button');
      expect(suggestBtn.props().className).toEqual('added');
      expect(suggestBtn.props().children).toEqual('Added!');
    });

    it('suggest button class should change on click', () => {
      const suggestBtn = wrapperSuggest.find('button');
      const mockAddClass = jest.fn();
      fetchMock.post('/api/v1/book', {});
      suggestBtn.simulate('click', { target: { classList: { add: mockAddClass } } });
      expect(mockAddClass).toHaveBeenCalledTimes(1);
    });

    it('should NOT have vote counts or buttons', () => {
      const voteBtns = wrapperSuggest.find('.vote-btns');
      const voteCounts = wrapperSuggest.find('.vote-counts');
      expect(voteBtns.length).toEqual(0);
      expect(voteCounts.length).toEqual(0);
    });
  });
});
