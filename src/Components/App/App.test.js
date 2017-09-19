import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';

describe('APP COMPONENT', () => {
  const wrapper = shallow(<App />);

  const resolveAfter2Seconds = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have initial state', () => {
    expect(wrapper.state()).toEqual({
      user_id: null,
      club_id: null,
      readBooks: [],
      currentBook: {},
      apiUrl: '',
    });
  });

  it('should fetch books and update state', async () => {
    fetchMock.get('/api/v1/book?club_id=1', [
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
      {
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
      {
        id: 3,
        title: 'Horror Book',
        author: 'Stephen King',
        goodreads_id: '67890',
        avg_rating: '4.81',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1334416842l/830502.jpg',
        upvotes: 2,
        downvotes: 0,
        status: 'suggested',
        user_id: 4,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.625Z',
        updated_at: '2017-09-19T06:01:45.625Z',
      },
    ]);
    wrapper.instance().getUserId(1, 1);
    await resolveAfter2Seconds();

    expect(wrapper.state()).toEqual({
      user_id: 1,
      club_id: 1,
      readBooks: [{
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
      }],
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
    });
  });

  it.skip('should update book schedule', async () => {
    fetchMock.patch('/api/v1/book?status=reading', 204);
    fetchMock.get('/api/v1/book?club_id=1', [
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
      {
        id: 2,
        title: 'Muder/Mystery Book',
        author: 'Stieg Larsson',
        goodreads_id: '45678',
        avg_rating: '2.77',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1327868566l/2429135.jpg',
        upvotes: 0,
        downvotes: 1,
        status: 'read',
        user_id: 2,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.625Z',
        updated_at: '2017-09-19T06:01:45.625Z',
      },
      {
        id: 3,
        title: 'Horror Book',
        author: 'Stephen King',
        goodreads_id: '67890',
        avg_rating: '4.81',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1334416842l/830502.jpg',
        upvotes: 2,
        downvotes: 0,
        status: 'suggested',
        user_id: 4,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.625Z',
        updated_at: '2017-09-19T06:01:45.625Z',
      },
    ]);
    fetchMock.patch('/api/v1/book?id=3', 204);

    wrapper.instance().updateBookSchedule();
    await resolveAfter2Seconds();

    expect(wrapper.state()).toEqual({
      user_id: 1,
      club_id: 1,
      readBooks: [{
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
      {
        id: 2,
        title: 'Muder/Mystery Book',
        author: 'Stieg Larsson',
        goodreads_id: '45678',
        avg_rating: '2.77',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1327868566l/2429135.jpg',
        upvotes: 0,
        downvotes: 1,
        status: 'read',
        user_id: 2,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.625Z',
        updated_at: '2017-09-19T06:01:45.625Z',
      }],
      currentBook: {
        id: 3,
        title: 'Horror Book',
        author: 'Stephen King',
        goodreads_id: '67890',
        avg_rating: '4.81',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1334416842l/830502.jpg',
        upvotes: 2,
        downvotes: 0,
        status: 'reading',
        user_id: 4,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.625Z',
        updated_at: '2017-09-19T06:01:45.625Z',
      },
      apiUrl: '',
    });
  });
});
