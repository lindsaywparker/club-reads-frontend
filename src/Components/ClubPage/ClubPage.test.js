import React from 'react';
import { shallow } from 'enzyme';
import ClubPage from './ClubPage';

describe('CLUB PAGE COMPONENT', () => {
  const wrapper = shallow(<ClubPage readBooks={[{}, {}]} currentBook={{}} userInfo={{}} match={{ params: { club_id: 1 } }} history={{ location: { pathname: '' } }} apiUrl={''} />);

  it('should render a component element', () => {
    expect(wrapper.find('.club-page-component')).toHaveLength(1);
  });

});
