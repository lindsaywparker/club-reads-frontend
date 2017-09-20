import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';

describe('SearchResultsContainer tests', () => {
  it('should render search results container', () => {
    const wrapper = shallow(<SearchResultsContainer
      books={[]}
      userInfo={{}}
      suggestedBooks={[{}]}
    />);

    expect(wrapper.find('.search-results-component')).toHaveLength(1);
  });
});
