import React from 'react';
import { shallow } from 'enzyme';
import SuggestedBooksContainer from './SuggestedBooksContainer';

describe('SUGGESTED BOOKS CONTAINER COMPONENT', () => {
  const wrapper = shallow(<SuggestedBooksContainer />);

  it('should have initial state', () => {
    expect(wrapper.state()).toEqual({
      suggestedBooks: [],
    });
  });

  it('should render a component element', () => {
    expect(wrapper.find('.suggested-books-container')).toHaveLength(1);
    expect(wrapper.find('.suggestion-instructions')).toHaveLength(1);
    expect(wrapper.find('.suggested-books')).toHaveLength(1);
  });

  it('should render a BookCard for each book in state', () => {
    wrapper.setState({
      suggestedBooks: [
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
      ],
    });

    expect(wrapper.find('BookCard')).toHaveLength(3);
  });
});
