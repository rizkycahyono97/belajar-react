import { useRef, useState } from 'react';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  //   ref
  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    setMessage('');

    // ref dom, setelah event submit kana mengarah ke ref lagi iputanya
    nameInput.current.focus();
  }

  return (
    <>
      <h1>Guest Book</h1>
      <form>
        <label htmlFor="name">Name</label> <br />
        <input
          ref={nameInput}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />{' '}
        <br />
        <label htmlFor="message">Message</label> <br />
        <textarea
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>{' '}
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
