import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew';

Enzyme.configure({ adapter: new Adapter()})

describe('When CatNew renders', () => {
  it('displays New heading', () => {
    const catNew = shallow(<CatNew />);

    const newHeading = catNew.find('h1');

    expect(newHeading.text()).toEqual('New');
  });
});