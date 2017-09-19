import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';

describe('SearchResultsContainer tests', () => {
  it('should render search results container', () => {
    const books = [
      {
        author: 'Jonathan Hickman',
        avg_rating: '3.80',
        goodreads_id: '16002165',
        image: 'https://url.com',
        ratings_count: '3144',
        title: 'Avengers',
      },
    ];

    let wrapper = shallow(<SearchResultsContainer
      books={[]}
      userInfo={{}}
      suggestedBooks={[{}]}
    />);

    expect(wrapper.find('.search-results-component')).toHaveLength(1);
  });
});