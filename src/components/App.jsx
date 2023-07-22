import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';
import NotFoundView from './NotFoundView/NotFoundView';
import { PrivateRoute } from './Routes/PrivateRoute'; 
import { PublicRoute } from './Routes/PublicRoute'; 
import { useDispatch } from 'react-redux';
import { getCurrent } from 'redux/auth/auth-operation'; 


const HomePage = lazy(() => import('./views/HomeView/HomeView'));
const ContactsPage = lazy(() => import('../components/views/PhonebookView/PhonebookView'));
const RegisterPage = lazy(() => import('./views/RegisterView'));
const LoginPage = lazy(() => import('./views/LoginView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />

           <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
