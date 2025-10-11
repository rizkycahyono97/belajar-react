import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { useImmerReducer } from 'use-immer';
import { NotesContext, NoteContextDispatch } from './NoteContext';

let id = 0;
const initialNotes = [
  { id: id++, text: 'Learn HTML', done: false },
  { id: id++, text: 'Learn CSS', done: true },
  { id: id++, text: 'Learn Javascript', done: false },
  { id: id++, text: 'Learn ReactJS', done: false }
];

/**
 * ini yang menggunakan useImmer/useState biasa
 */
// export default function NoteApp() {
//   const [notes, setNotes] = useImmer(initialNotes);

//   function handleOnAddNote(text) {
//     setNotes(draft => {
//       draft.push({
//         id: id++,
//         text: text,
//         done: false
//       });
//     });
//   }

//   function handleChangeNote(note) {
//     setNotes(draft => {
//       const index = draft.findIndex(item => item.id === note.id); // cari id
//       draft[index] = note;
//     });
//   }

//   function handleDeleteNote(note) {
//     setNotes(draft => {
//       const index = draft.findIndex(item => item.id === note.id);
//       draft.splice(index, 1);
//     });
//   }

//   return (
//     <div>
//       <h1>Note App</h1>
//       <NoteForm onAddNote={handleOnAddNote} />
//       <NoteList
//         notes={notes}
//         onChange={handleChangeNote}
//         onDelete={handleDeleteNote}
//       />
//     </div>
//   );
// }

/**
 * menggunakan reducer + useImmer
 */
function notesReducer(notes, action) {
  if (action.type === 'ADD_NOTE') {
    notes.push({
      id: id++,
      text: action.text,
      done: false
    });
  } else if (action.type === 'CHANGE_NOTE') {
    const index = notes.findIndex(note => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === 'DELETE_NOTE') {
    const index = notes.findIndex(note => note.id === action.id);
    notes.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  // function handleOnAddNote(text) {
  //   dispatch({
  //     type: 'ADD_NOTE',
  //     text: text
  //   });
  // }

  // function handleChangeNote(note) {
  //   dispatch({
  //     ...note,
  //     type: 'CHANGE_NOTE'
  //   });
  // }

  // function handleDeleteNote(note) {
  //   dispatch({
  //     ...note,
  //     type: 'DELETE_NOTE'
  //   });
  // }

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NoteContextDispatch.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NoteContextDispatch.Provider>
      </NotesContext.Provider>
    </div>
  );
}
