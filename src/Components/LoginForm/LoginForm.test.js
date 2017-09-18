import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom'
import fetchMock from 'fetch-mock';

import LoginForm from './LoginForm';

describe('LOGIN FORM COMPONENT', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<LoginForm />);
  const emailInput = wrapper.find('.login-email-input');

  fetchMock.post('*', { user: { id: 1, club_id: 1 } });

  it('should render a component element', () => {
    expect(wrapper.find('.login-component')).toHaveLength(1);
    expect(wrapper.find('.logo')).toHaveLength(1);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('.login-email-input')).toHaveLength(1);
    expect(wrapper.find('.login-btn')).toHaveLength(1);
  });

  it('should have initial state', () => {
    expect(wrapper.state()).toEqual({
      input: '',
    });
  });

  it('should update state on input change', () => {
    emailInput.simulate('change', { target: { value: 'me@me.com' } });
    expect(wrapper.state()).toEqual({
      input: 'me@me.com',
    });
  });

  it.skip('should handle login', () => {
    const wrapperMount = mount(<Router><LoginForm getUserId={mockFn} history={[]} /></Router>);

    wrapperMount.find('.login-email-input').simulate('change', { target: { value: 'me@me.com' } });
    wrapperMount.find('.login-btn').simulate('submit');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
