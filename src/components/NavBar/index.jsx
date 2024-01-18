import './style.css'
import { useState } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Twirl as Hamburger } from 'hamburger-react'
import logo from '/assets/images/qc-logo.jpg'

function NavBar() {
  return (
    <div className="navbar-container">
      <Navbar className="bg-dark-subtle">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="180"
              height="80"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar