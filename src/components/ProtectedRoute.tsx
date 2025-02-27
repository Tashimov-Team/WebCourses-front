import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const hasToken = !!localStorage.getItem('authToken');

  if (loading) {
    return <div className="text-center py-20">Проверка авторизации...</div>;
  }

  if (!user || !hasToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;