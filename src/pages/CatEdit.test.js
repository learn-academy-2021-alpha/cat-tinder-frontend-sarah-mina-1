import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from './CatEdit';

Enzyme.configure({ adapter: new Adapter()})

describe('When CatEdit renders', () => {
  it('displays Edit heading', () => {
    const catEdit = shallow(<CatEdit />);

    const editHeading = catEdit.find('h2');

    expect(editHeading.text()).toEqual('Edit');
  });
});
