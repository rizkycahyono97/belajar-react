import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import GuestBook from './GuestBook.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GuestBook />
  </StrictMode>
);
