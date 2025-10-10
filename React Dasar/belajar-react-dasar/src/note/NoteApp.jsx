import { useImmer } from 'use-immer';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

let id = 0;
const initialNotes = [
  { id: id++, text: 'Learn HTML', done: false },
  { id: id++, text: 'Learn CSS', done: true },
  { id: id++, text: 'Learn Javascript', done: false },
  { id: id++, text: 'Learn ReactJS', done: false }
];

export default function NoteApp() {
  const [notes, setNotes] = useImmer(initialNotes);

  function handleOnAddNote(text) {
    setNotes(draft => {
      draft.push({
        id: id++,
        text: text,
        done: false
      });
    });
  }

  function handleChangeNote(note) {
    setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id); // cari id
      draft[index] = note;
    });
  }

  function handleDeleteNote(note) {
    setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id);
      draft.splice(index, 1);
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleOnAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
