import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchForm from './SearchForm';

describe('SEARCH FORM COMPONENT', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<SearchForm />);
  const searchInput = wrapper.find('.search-input');

  it('should render a component element', () => {
    expect(wrapper.find('.search-form-component')).toHaveLength(1);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('.search-input')).toHaveLength(1);
    expect(wrapper.find('.search-btn')).toHaveLength(1);
  });

  it('should have initial state', () => {
    expect(wrapper.state()).toEqual({
      input: '',
    });
  });

  it('should update state on input change', () => {
    searchInput.simulate('change', { target: { value: 'summer' } });
    expect(wrapper.state()).toEqual({
      input: 'summer',
    });
  });

  it('should handle search', () => {
    const wrapperMount = mount(<SearchForm fetchBooks={mockFn} />);

    wrapperMount.find('.search-input').simulate('change', { target: { value: 'summer' } });
    wrapperMount.find('.search-btn').simulate('submit');
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapperMount.state()).toEqual({
      input: '',
    });
  });
});
