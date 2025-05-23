import React from 'react'
import { useState } from 'react';
export const Task5 = () => {
    const [isOpen, setIsOpen] = useState(false); 
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Task 5</h1>
     <div className='container'>
      <button onClick={() => setIsOpen(true)} className='Openmodal'>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Modal Title</h2>
              {/* <button onClick={() => setIsOpen(false)} className='X'>×</button> */}
            </div>
            <div className="modal-body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed placeat at numquam aperiam libero reprehenderit labore tempora perspiciatis blanditiis sunt cum id, facilis dignissimos quasi amet ab nostrum officiis rerum magni? Voluptas cum inventore harum nihil nostrum velit expedita reprehenderit esse culpa blanditiis deserunt repellat maiores repudiandae libero explicabo neque eligendi, veritatis pariatur magnam excepturi quaerat ipsam temporibus ut maxime. Debitis minima repellat, eaque accusamus consequatur iste excepturi? Facere ipsum reprehenderit culpa aperiam ducimus odio. Ipsam, nostrum dolorem aut saepe esse mollitia obcaecati eum quis expedita eligendi pariatur magni sed reprehenderit aliquid quidem aperiam, vero quam culpa cum amet cupiditate!</p>
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsOpen(false)} className='close'>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}
