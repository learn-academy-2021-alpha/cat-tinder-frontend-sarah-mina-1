import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

class Footer extends Component{
  render(){
    return(
      <footer>
        <Nav>
          <NavItem>
            <span className="nav-link">&copy; 2021 Sarah & Mina</span>
          </NavItem>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catindex">Meet the Cats</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </NavItem>
        </Nav>
      </footer>
    )
  }
}
export default Footer
