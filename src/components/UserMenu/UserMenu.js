import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operation';
import { getUser } from 'redux/auth/auth-selectors';
import { StyledName } from './UserMenu.styled';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <div>
      <StyledName>Hello, {name} </StyledName>
      <button onClick={onLogOut} type="button">
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
