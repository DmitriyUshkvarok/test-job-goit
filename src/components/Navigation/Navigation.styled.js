import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainLogo = styled.img`
  width: 176px;
  height: 52px;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 22px;
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

  &:hover {
    color: aqua;
  }
`;
