import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import UserRegister from './components/User/UserRegister.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* public Route */}
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />} />
        </Route>

        {/* rpivate Route */}
        <Route path="/dashboard"></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
