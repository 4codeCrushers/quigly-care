
import { useState } from 'react';
import sections from '../../data/sections.json'
import './style.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Dropdown = ({ isOpen }) => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {sections.map((section) => (
          <li key={section.title} className="dropdown-link">
            <Link
              onClick={handleItemClick}
              href={section.href}
              activeClass="active"
              to={section.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>{section.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
