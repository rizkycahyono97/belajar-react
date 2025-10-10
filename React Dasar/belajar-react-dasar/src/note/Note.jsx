import { useState } from 'react';

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let component;

  function handleOnChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  if (isEditing) {
    //mode editing
    component = (
      <>
        <input type="text" onChange={handleOnChangeText} value={note.text} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
}
