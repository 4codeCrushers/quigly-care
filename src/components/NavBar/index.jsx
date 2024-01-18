import './style.css'
import { useState } from 'react'
import { Navbar, Container, Dropdown } from 'react-bootstrap'
import { Twirl as Hamburger } from 'hamburger-react'
import logo from '/assets/images/qc-logo.jpg'
import sections from '../../data/sections.json'

function NavBar() {
  const [isOpen, setOpen] = useState(false);

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
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Dropdown className={`navbar-menu ${isOpen ? 'active' : ''}`}>
              {isOpen && (
                <ul className="grid gap-2">
                  {sections.map((section) => (
                    <li
                      key={section.title}
                      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                      <a
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                        href={section.href}>
                        <span className="flex gap-1 text-lg">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Dropdown>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;