import React from 'react';
import { shallow } from 'enzyme';
import ClubPage from './ClubPage';

describe('CLUB PAGE COMPONENT', () => {
  const wrapper = shallow(<ClubPage readBooks={[{}, {}]} currentBook={{}} userInfo={{}} match={{ params: { club_id: 1 } }} history={{ location: { pathname: '' } }} apiUrl={''} />);

  it('should render a component element', () => {
    expect(wrapper.find('.club-page-component')).toHaveLength(1);
  });

  it('should not render the Carousel if there are no books', () => {
    const wrapperEmpty = shallow(<ClubPage readBooks={[]} currentBook={null} userInfo={{}} match={{ params: { club_id: 1 } }} history={{ location: { pathname: '' } }} apiUrl={''} />);
    expect(wrapperEmpty.find('Carousel')).toHaveLength(0);
  });

  it('should render the Carousel if there are books', () => {
    expect(wrapper.find('Carousel')).toHaveLength(1);
  });

});
