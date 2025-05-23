import React from 'react'
import { useState } from 'react';
export const Task2 = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };
  return (
    <>
     <h1 style={{ textAlign: "center" }}>Task2</h1>
      <div className="container">
        {submitted ? (
        <p>Thank you for your submission!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />
          <button type="submit">Submit</button>
        </form>
          )}
      </div> 
    </>
  )
}
