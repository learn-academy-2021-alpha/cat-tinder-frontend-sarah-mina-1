import React, { useState } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
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
                  <NavLink href="/catindex">Meet the Cats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/catnew">Add a Cat</NavLink>
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
