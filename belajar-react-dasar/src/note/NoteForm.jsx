import { useContext, useState } from 'react';
import { NoteContextDispatch } from './NoteContext';

export default function NoteForm() {
  const [text, setText] = useState('');
  const dispatch = useContext(NoteContextDispatch);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setText('');
    dispatch({
      type: 'ADD_NOTE',
      text: text
    });
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
