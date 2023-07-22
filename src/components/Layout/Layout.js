import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/auth-selectors';
import { WrapperHeader, WrapperMain, NavStyled } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Navigation = ({ isLogin }) => {
  return (
    <>
      <NavStyled to="/home">Home</NavStyled>
      {isLogin && <NavStyled to="/contacts">Contacts</NavStyled>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </>
  );
};

const Layout = () => {
  const isLogin = useSelector(isAuth);

  return (
    <>
      <WrapperHeader>
        <Navigation isLogin={isLogin} />
      </WrapperHeader>
      <WrapperMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperMain>
    </>
  );
};

export default Layout;
