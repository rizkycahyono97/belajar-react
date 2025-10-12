import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Counter from './Counter';
import CounterApp from './CounterApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
