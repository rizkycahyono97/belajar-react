import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import UserRegister from './components/User/UserRegister.jsx';
import UserLogin from './components/User/UserLogin.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';
import UserProfile from './components/User/UserProfile.jsx';
import UserLogout from './components/User/UserLogout.jsx';
import ContactDetail from './components/Contact/ContactDetail.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import NotFound from './components/NotFound.jsx';
import ContactListPage from './pages/Contact/ContactListPage.jsx';
import ContactCreatePage from './pages/Contact/ContactCreatePage.jsx';
import ContactEditPage from './pages/Contact/ContactEditPage.jsx';
import AddressCreatePage from './pages/Address/AddressCreatePage.jsx';
import AddressEditPage from './pages/Address/AddressEditPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* public Route */}
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/" element={<UserLogin />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* rpivate Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="users">
              <Route path="profile" element={<UserProfile />} />
              <Route path="logout" element={<UserLogout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="contacts">
              <Route index element={<ContactListPage />} />
              <Route path="create" element={<ContactCreatePage />} />
              <Route path=":id">
                <Route index element={<ContactDetail />} />
                <Route path="edit" element={<ContactEditPage />} />
                <Route path="addresses">
                  <Route path="create" element={<AddressCreatePage />} />
                  <Route path=":addressId/edit" element={<AddressEditPage />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
