import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import SuggestedBooksContainer from './SuggestedBooksContainer';

describe('SUGGESTED BOOKS CONTAINER COMPONENT', () => {
  const wrapper = shallow(<SuggestedBooksContainer />);

  const resolveAfter2Seconds = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

  it('should have initial state', () => {
    expect(wrapper.state()).toEqual({
      suggestedBooks: [],
    });
  });

  it.skip('should fetch books and update state', async () => {
    fetchMock.get('/api/v1/book?club_id=1', []);
    wrapper.instance().getUserId(1, 1);
    await resolveAfter2Seconds();

    expect(wrapper.state()).toEqual();
  });
});
