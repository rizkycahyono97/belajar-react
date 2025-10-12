import { useContext, useState } from 'react';
import { NoteContextDispatch, NotesContext } from './NoteContext';

export default function Note({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(NoteContextDispatch);

  let component;

  function handleOnChangeText(e) {
    dispatch({
      ...note,
      type: 'CHANGE_NOTE',
      text: e.target.value
    });
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
    dispatch({
      ...note,
      type: 'CHANGE_NOTE',
      text: e.target.checked
    });
  }

  function handleDelete() {
    dispatch({
      ...note,
      type: 'DELETE_NOTE',
      id: note.id
    });
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
