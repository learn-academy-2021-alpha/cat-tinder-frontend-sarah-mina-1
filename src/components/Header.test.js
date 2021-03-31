// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Header from './Header'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When Header loads', () => {

  it('displays a hamburger icon and the menu is collapsed', () => {
    const header = shallow(<Header/>);

    const hamburger = header.find('NavbarToggler');

    expect(hamburger.length).toEqual(1);

    const collapsedComponent = header.find('Collapse');
    expect(collapsedComponent.props().isOpen).toEqual(false);
  })

  it('expands the menu when hamburger icon is clicked', () => {
    // arrange
    const header = shallow(<Header/>);

    // act
    const hamburger = header.find('NavbarToggler');
    hamburger.simulate('click');

    // assert
    const collapsedComponent = header.find('Collapse');
    expect(collapsedComponent.props().isOpen).toEqual(true);
  })
})
