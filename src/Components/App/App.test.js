import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';

describe('APP COMPONENT', () => {
  const wrapper = shallow(<App />);

  const resolveAfter2Seconds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

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

});
