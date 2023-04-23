import Logo from '../../images/Logo.png';
import {
  MainLogo,
  NavContainer,
  StyleNav,
  StyleNavLink,
} from './Navigation.styled';
import { Link } from 'react-router-dom';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

function Navigation() {
  return (
    <NavContainer>
      <Link to="/home">
        <MainLogo src={Logo} alt="Logo" />
      </Link>
      <StyleNav>
        <StyleNavLink to="/home">Home</StyleNavLink>
        <StyleNavLink to="/user">User Tweets</StyleNavLink>
        <ThemeSwitcher />
      </StyleNav>
    </NavContainer>
  );
}

export default Navigation;
