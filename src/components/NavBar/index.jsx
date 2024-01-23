import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Dropdown from '../Dropdown';
import { Navbar, Container } from 'react-bootstrap';
import logo from '/assets/images/qc-logo.jpg';
import './style.css';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="navbar-container" id=" navbar">
      <Navbar className="bg-dark-subtle navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="180"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Container className="d-flex justify-content-end">
            <div>
              <Hamburger toggled={isDropdownOpen} toggle={toggleDropdown} />
            </div>
          </Container>
        </Container>
      </Navbar>
      <Dropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
    </div>
  );
};

export default NavBar;