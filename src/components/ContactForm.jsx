import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='w-full'>
        <div className="text-center">
                  <h2>Contact me</h2>
        </div>

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='flex flex-col gap-4'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='flex flex-col gap-4'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={500}
            required
          />
          <p>Characters left: {500 - formData.message.length}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;