import React from 'react'
import { useState } from 'react';
export const Task8 = () => {
  const [activeTab, setActiveTab] = useState(0);
const tabs = [
    { 
        title: 'Home', 
        content: (
            <>
               <h1>Home</h1>
               <p>Welcome to the Home tab content!</p>
               <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis aspernatur illum sunt ex alias, at culpa rem? Distinctio qui, dicta harum atque laboriosam aliquam perspiciatis nostrum! Nemo debitis eveniet optio? Nemo nam voluptas culpa odit libero, perferendis iure in aliquam id, atque maxime, recusandae amet minus? Dolorum cupiditate optio ratione sunt ut soluta pariatur vero rerum? Reiciendis magni incidunt quas aperiam eos delectus voluptate aliquam eligendi. Exercitationem labore voluptate voluptatem quo facilis ducimus, eos perferendis doloremque aut distinctio, expedita magnam fugiat accusamus optio, iure veritatis soluta magni deserunt sint nesciunt sapiente! Laudantium, nemo veniam facilis totam amet eos! Eos.</em>
            </>
        )
    },
    { 
        title: 'Profile', 
        content: (
            <>
                <h1>Profile</h1>
                <p>This is your Profile information.</p>
                <em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam doloribus vero deserunt minima voluptates quasi eius iure minus culpa eaque architecto dignissimos inventore possimus porro quisquam, illum dolore eum non.</em>
            </>
        )
    },
    { 
        title: 'Settings', 
        content: (
            <>
                <h1>Settings</h1>
                <p>Configure your settings here.</p>
                <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus! Quod, cumque. Quisquam, voluptatibus! Quod, cumque. Quisquam, voluptatibus! Quod, cumque. Quisquam, voluptatibus! Quod, cumque.</em>
            </>
        )
    }
];
  return (
   <>
   <h1 style={{ textAlign: 'center' }}>Task8</h1>
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
   </>
  )
}
