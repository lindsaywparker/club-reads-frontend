import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('CAROUSEL COMPONENT', () => {
  const readBooks = [
    {
      id: 31,
      title: 'Caliban\'s War (The Expanse, #2)',
      author: 'James S.A. Corey',
      goodreads_id: '12591698',
      avg_rating: '4.28',
      ratings_count: '50641',
      image: 'https://images.gr-assets.com/books/1407572377m/12591698.jpg',
      upvotes: 1,
      downvotes: 0,
      status: 'read',
      user_id: 1,
      club_id: 1,
      created_at: '2017-09-18T20:32:35.313Z',
      updated_at: '2017-09-18T20:32:35.313Z',
    },
    {
      id: 30,
      title: 'Leviathan Wakes (The Expanse, #1)',
      author: 'James S.A. Corey',
      goodreads_id: '8855321',
      avg_rating: '4.20',
      ratings_count: '84809',
      image: 'https://images.gr-assets.com/books/1411013134m/8855321.jpg',
      upvotes: 1,
      downvotes: 0,
      status: 'read',
      user_id: 1,
      club_id: 1,
      created_at: '2017-09-18T20:32:33.875Z',
      updated_at: '2017-09-18T20:32:33.875Z',
    },
  ];


  const currentBook = {
    id: 32,
    title: 'Abaddon\'s Gate (The Expanse, #3)',
    author: 'James S.A. Corey',
    goodreads_id: '16131032',
    avg_rating: '4.18',
    ratings_count: '40476',
    image: 'https://images.gr-assets.com/books/1407572059m/16131032.jpg',
    upvotes: 1,
    downvotes: 0,
    status: 'reading',
    user_id: 1,
    club_id: 1,
    created_at: '2017-09-18T20:32:37.652Z',
    updated_at: '2017-09-18T20:32:37.652Z',
  };

  const wrapper = shallow(<Carousel readBooks={readBooks} currentBook={currentBook} />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Carousel
      readBooks={readBooks}
      currentBook={currentBook}
    />, div);
  });

  it('should render a currently reading book card with the book info', () => {
    expect(wrapper.find('.current-book').length).toEqual(1);
    expect(wrapper.find('.current-book .book-title').text()).toEqual('Abaddon\'s Gate (The Expanse, #3)');
    expect(wrapper.find('.current-book .book-author').text()).toEqual('By: James S.A. Corey');
    expect(wrapper.find('.current-book .book-rating').text()).toEqual('Rating: 4.18');
    expect(wrapper.find('.current-book .book-rating-count').text()).toEqual('Number of Ratings: 40476');
    expect(wrapper.find('.current-book a').props().href).toEqual('https://www.goodreads.com/book/show/16131032');
  });

  it('should render a recently read book card with the book info', () => {
    expect(wrapper.find('.read-book').length).toEqual(2);
    expect(wrapper.find('.read-book .book-title').first().text()).toEqual('Caliban\'s War (The Expanse, #2)');
    expect(wrapper.find('.read-book .book-author').first().text()).toEqual('By: James S.A. Corey');
    expect(wrapper.find('.read-book .book-rating').first().text()).toEqual('Rating: 4.28');
    expect(wrapper.find('.read-book .book-rating-count').first().text()).toEqual('Number of Ratings: 50641');
    expect(wrapper.find('.read-book a').first().props().href).toEqual('https://www.goodreads.com/book/show/12591698');
  });

  it('should NOT render a recently read book card if no books have been read in the club yet', () => {
    const wrapper = shallow(<Carousel readBooks={[]} currentBook={currentBook} />);
    expect(wrapper.find('.read-book').length).toEqual(0);
  });

  it('should NOT render a currently reading book card if no book is being read', () => {
    const wrapper = shallow(<Carousel readBooks={[]} currentBook={null} />);
    expect(wrapper.find('.current-book').length).toEqual(0);
  });

  it('should render a "Recently Read" label over the first read book card only', () => {
    const firstReadBook = wrapper.find('.read-book').at(0);
    const secondReadBook = wrapper.find('.read-book').at(1);
    expect(firstReadBook.find('.recent-label').length).toEqual(1);
    expect(secondReadBook.find('.recent-label').length).toEqual(0);
    expect(firstReadBook.find('.recent-label').text()).toEqual('Recently Read:');
  });
});
