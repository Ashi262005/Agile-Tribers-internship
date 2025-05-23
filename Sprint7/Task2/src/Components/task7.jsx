import React from 'react'
import { useState } from 'react';
export const Task7 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const items = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon','Mango',
    'Nectarine','Orange','Papaya','Quince','Raspberry',
    'Strawberry','Tangerine','Ugli fruit','Vanilla bean',
    'Watermelon','Xigua','Yellow passion fruit','Zucchini'
  ];
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
    <h1 style={{ textAlign: 'center' }}>Task7</h1>
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ol>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
    </>
  )
}
