import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import SearchPage from '../SearchPage/SearchPage';

describe('SearchPage tests', () => {
  const history = {
    length: 35,
    action: 'PUSH',
    location: {
      pathname: '/suggestbook',
      search: '',
      hash: '',
      key: 'cl1agl',
    },
  };

  const userInfo = {
    user_id: 2,
    club_id: 1,
    readBooks: [
      {
        id: 1,
        title: 'Fantasy Book',
        author: 'George R.R. Martin',
        goodreads_id: '12345',
        avg_rating: '3.86',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1436732693l/13496.jpg',
        upvotes: 1,
        downvotes: 1,
        status: 'read',
        user_id: 1,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.624Z',
        updated_at: '2017-09-19T06:01:45.624Z',
      },
    ],
    currentBook: {
      id: 2,
      title: 'Muder/Mystery Book',
      author: 'Stieg Larsson',
      goodreads_id: '45678',
      avg_rating: '2.77',
      ratings_count: '1000',
      image: 'https://images.gr-assets.com/books/1327868566l/2429135.jpg',
      upvotes: 0,
      downvotes: 1,
      status: 'reading',
      user_id: 2,
      club_id: 1,
      created_at: '2017-09-19T06:01:45.625Z',
      updated_at: '2017-09-19T06:01:45.625Z',
    },
    apiUrl: '',
  };

  const wrapper = shallow(<SearchPage userInfo={userInfo} history={history} />);

  const resolveAfter2Seconds = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

