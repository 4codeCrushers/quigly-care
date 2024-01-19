
import React, { useState } from 'react';
import sections from '../../data/sections.json'
import './style.css';

const Dropdown = ({ isOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <ul style={{ listStyle: 'none' }}>
        {sections.map((section) => (
          <li
            key={section.title}
            className="">
            <a
              onClick={() => setOpen(false)}
              className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              href={section.href}>
              <span className="flex gap-1">{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;