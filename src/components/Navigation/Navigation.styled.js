import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainLogo = styled.img`
  width: 176px;
  height: 52px;
  margin-left: 20px;

  @media screen and (max-width: 530px) {
    margin-left: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 320px) {
    gap: 10px;
  }
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

  @media screen and (max-width: 530px) {
    margin-left: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
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
