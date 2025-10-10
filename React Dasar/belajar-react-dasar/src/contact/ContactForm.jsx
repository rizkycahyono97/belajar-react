import { useState } from 'react';
import useImmer from 'use-immer';

const data = [
  {
    name: '',
    message: ''
  }
];

export default function ContactForm() {
  let [contact, setContact] = useImmer(data);

  function handleNameChange(e) {
    setContact({
      ...contact, // ambil data yang lama / ditimpa
      name: e.target.value //isi name dari target.value
    });
  }

  function handleMessageChange(e) {
    setContact(draft => {
      // menggunakan useImmer, tidak perlu spread syntax
      draft.message = e.target.value;
    });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <input
        type="text"
        placeholder="Nama"
        value={contact.name}
        onChange={handleNameChange}
      />
      <br />
      <input
        type="text"
        placeholder="Message"
        value={contact.message}
        onChange={handleMessageChange}
      />
      <h1>Contact Detail</h1>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  );
}
