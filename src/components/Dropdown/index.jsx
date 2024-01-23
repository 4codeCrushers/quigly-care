
import { useState } from 'react';
import sections from '../../data/sections.json'
import './style.css';

const Dropdown = ({ isOpen }) => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {sections.map((section) => (
          <li key={section.title} className="dropdown-links">
            <a
              onClick={handleItemClick}
              href={section.href}
            >
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
