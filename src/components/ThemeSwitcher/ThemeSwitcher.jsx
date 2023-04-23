import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { toggleTheme } from 'redux/themeSlice';
import { BtnSwitcher, SwitcherWrapper } from './ThemeSwither.styled';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const theme = isDarkMode ? 'light' : 'dark';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <SwitcherWrapper>
      <BtnSwitcher onClick={handleThemeToggle}>
        {isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
      </BtnSwitcher>
    </SwitcherWrapper>
  );
};
export default ThemeSwitcher;
