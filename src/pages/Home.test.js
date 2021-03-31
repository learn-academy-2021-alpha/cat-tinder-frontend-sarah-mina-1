import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home';

Enzyme.configure({ adapter: new Adapter()})

describe('When Home renders', () => {
  it('displays Home heading', () => {
    const home = shallow(<Home />);

    const homeHeading = home.find('h1');

    expect(homeHeading.text()).toEqual('Home');
  });
});