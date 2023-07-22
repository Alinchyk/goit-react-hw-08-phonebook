import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(isAuth);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};
