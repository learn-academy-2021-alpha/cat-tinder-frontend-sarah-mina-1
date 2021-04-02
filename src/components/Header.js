import React, { useState } from 'react'
import { Jumbotron, Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catlogo from '../assets/cat-tinder.png'

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <a href="/"><img src={ catlogo } alt="cat tinder logo" className="cat-logo" /></a>
          <Navbar color="faded" light>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/catindex">Meet the Cats</NavLink>
                </NavItem>
                <br />
                <NavItem>
                  <NavLink to="/catnew">Add a Cat</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </Jumbotron>
    </>
  )
}
export default Header
