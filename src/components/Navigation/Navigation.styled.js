import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainLogo = styled.img`
  width: 176px;
  height: 52px;
  padding-left: 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyleNav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: auto;
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font-family);
  text-transform: uppercase;
  text-shadow: 0 0 50px blue;
`;

export const StyleNavLink = styled(NavLink)`
  color: var(--color-text);
  transition: color var(--transition);
  position: relative;

  &:hover {
    color: aqua;
  }

  &.active {
    color: aqua;
  }

  &.active::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 3px;
    background-color: aqua;
    border-radius: 5px;
  }
`;
