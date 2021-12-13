import React, { Fragment } from 'react'
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CustomNavbar() {
    return (
     
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
	  <Link className="link-items" to="/">Home</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className="link-items" to="/jokes">Jokes</Link>
		  <Link className="link-items" to="/products">Products</Link>
        </Nav>
      
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default CustomNavbar
