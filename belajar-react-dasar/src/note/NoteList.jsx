import { useContext, useMemo, useRef, useState } from 'react';
import Note from './Note';
import { NotesContext } from './NoteContext';

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.info('filtered memo');
    return notes.filter(note => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    console.info('Search');
    setSearch(searchInput.current.value);
  }

  return (
    <div>
      <input type="text" ref={searchInput} placeholder="Search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map(note => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
