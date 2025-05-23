import React from 'react'
import { useState } from 'react';
export const Task3 = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className="page">
      <h1>Task3</h1>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'} Mode</button>
          <h1>Theme Toggle Example</h1>
          <p>Current theme: {darkMode ? 'Dark' : 'Light'}</p>
       </div>
    </div>
    </>
  )
}
