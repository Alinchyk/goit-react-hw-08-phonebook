import { AuthNavStyled } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <AuthNavStyled to="/register">Register</AuthNavStyled>|
      <AuthNavStyled to="/login">LogIn</AuthNavStyled>
    </div>
  );
};

export default AuthNav;
