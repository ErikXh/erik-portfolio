import React, { useRef, useState } from 'react';
import Button from './Button';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yxnzsks', 'template_xsaahgu', form.current, {
        publicKey: 'udUo5j6YppzkUAZpr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='w-full'>

        <div className="text-center">
        <h2 className='text-2xl'>Contact me</h2>
        </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col py-4 gap-4'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="user_name"
            required
          />
        </div>

        <div className='flex flex-col py-4 gap-4'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="user_email"
            required
          />
        </div>

        <div className='flex flex-col py-4 gap-4'>
          <label htmlFor="message">Message:</label>
          <textarea
             name="message"
            // maxLength={500}
            required
          />
          {/* <p>Characters left: {500 - formData.message.length}</p> */}
        </div>

        <div className="py-4">
          <Button 
          value="send"
          type="submit"
          btnName="submit"/>
        </div>
       
      </form>
    </div>
  );
};

export default ContactForm;