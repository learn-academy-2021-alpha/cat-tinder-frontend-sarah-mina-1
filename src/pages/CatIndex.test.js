import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex';

Enzyme.configure({ adapter: new Adapter()})

describe('When CatIndex renders', () => {
  it('displays Index heading', () => {
    const catIndex = shallow(<CatIndex />);

    const indexHeading = catIndex.find('h1');

    expect(indexHeading.text()).toEqual('Index');
  });
});