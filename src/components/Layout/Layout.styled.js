import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperMain = styled.main`
  width: 100vw;
  height: 100%;
  display: block;
`;

export const WrapperHeader = styled.header`
  height: 70px;
  background: linear-gradient(to top right, #66d0d0, #004747);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 70px;
  padding: 10px;
  border-bottom: 6px double white;
  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;
`;

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  border-bottom: 4px double black;

  &:hover {
    color: #66d0d0;
    border-bottom: 4px double #66d0d0;
  }

  &.active {
    color: white;
    border-bottom: 4px double white;

    &:hover {
      color: #66d0d0;
      border-bottom: 4px double #66d0d0;
    }
  }
`;
