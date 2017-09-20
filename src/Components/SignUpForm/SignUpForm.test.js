import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import SignUpForm from './SignUpForm';

describe('SIGNUPFORM COMPONENT', () => {
  fetchMock.get('/api/v1/club', [
    {
      id: 1,
      name: 'best club evar',
      created_at: '2017-09-13T20:41:39.278Z',
      updated_at: '2017-09-13T20:41:39.278Z',
    },
    {
      id: 2,
      name: 'turing book club',
      created_at: '2017-09-17T02:22:38.716Z',
      updated_at: '2017-09-17T02:22:38.716Z',
    },
  ]);

  const wrapper = shallow(<SignUpForm getUserId={jest.fn()} apiUrl={''} />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUpForm
      getUserId={jest.fn()}
      apiUrl={''}
    />, div);
  });

  it('should have an email input', () => {
    const emailInput = wrapper.find('input.signup-email-input');
    expect(emailInput.length).toEqual(1);
  });

  it('should have a club selector', () => {
    const clubSelector = wrapper.find('select#club-dropdown');
    expect(clubSelector.length).toEqual(1);
  });

  it('should have a submit button', () => {
    const submitBtn = wrapper.find('input.signup-submit-btn');
    expect(submitBtn.length).toEqual(1);
  });

  it('should update state when the input value changes', () => {
    const emailInput = wrapper.find('input.signup-email-input');
    expect(wrapper.state().input).toEqual('');
    emailInput.simulate('change', { target: { value: 'test@email.com' } });
    expect(wrapper.state().input).toEqual('test@email.com');
  });

  // not sure how to really test this
  it.skip('should do something when the form is submitted', () => {
    fetchMock.post('/api/v1/user/signup', {
      user: {
        id: 6,
        email: 'testemail@test.test',
        club_id: 1,
        created_at: '2017-09-20T03:53:25.117Z',
        updated_at: '2017-09-20T03:53:25.117Z',
      },
      message: 'new user created!',
    });
    const signUpForm = wrapper.find('.signup-form');
    signUpForm.simulate('submit', { preventDefault: jest.fn() });
  });
});
