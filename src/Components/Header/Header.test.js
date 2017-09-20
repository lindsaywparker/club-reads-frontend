import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import Header from './Header';

describe('HEADER COMPONENT', () => {
  const wrapper = shallow(<Header />);

  it('should render a component element', () => {
    expect(wrapper.find('.header-component')).toHaveLength(1);
  });

  it('should render the logged in header if it receives a club id', () => {
    const clubId = {
      clubId: 1,
    };
    const wrapperMount = mount(<Router><Header clubId={clubId} /></Router>);
    expect(wrapperMount.find('.nav-link-container')).toHaveLength(1);
    expect(wrapperMount.find('.nav-link')).toHaveLength(3);
  });

  it('should not render nav links if there is no club id', () => {
    const wrapperMount = mount(<Router><Header /></Router>);
    expect(wrapperMount.find('.nav-link-container')).toHaveLength(0);
    expect(wrapperMount.find('.nav-link')).toHaveLength(0);
  });
});
