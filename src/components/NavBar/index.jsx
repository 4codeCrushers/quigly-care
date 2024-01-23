import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Dropdown from '../Dropdown';
import { Navbar, Container } from 'react-bootstrap';
import ContactForm from '../ContactForm/index.jsx'; // Import the ContactForm component
import logo from '/assets/images/qc-logo.jpg';
import './style.css';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleContactForm = () => {
    setShowContactForm((prev) => !prev);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="navbar-container">
      <Navbar className="bg-dark-subtle navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="180"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Container className="d-flex justify-content-end">
            <div>
              <button type="button" className="btn btn-primary" onClick={toggleContactForm}>
                Enquire Now
              </button>
            </div>
            <div>
              <Hamburger toggled={isDropdownOpen} toggle={toggleDropdown} />
            </div>
          </Container>
        </Container>
      </Navbar>
      <ContactForm showForm={showContactForm} onClose={closeContactForm} />
      <Dropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
    </div>
  );
};

export default NavBar;