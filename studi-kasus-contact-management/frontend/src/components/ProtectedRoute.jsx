import { Navigate, Outlet } from 'react-router';
import { useLocalStorage } from 'react-use';

export default function ProtectedRoute() {
  const [token, _] = useLocalStorage('token', '');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
