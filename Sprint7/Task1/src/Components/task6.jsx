import React from 'react'
import { useState } from 'react';
export const Task6 = () => {
     const [isOpen, setIsOpen] = useState(false);
     const options = ['Profile', 'Settings', 'Messages', 'Logout'];
  return (
   <>
   <h1 style={{ textAlign: 'center' }}>Task6</h1>
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        Menu {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => setIsOpen(false)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
   </>
  )
}
