import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';

export const PageUserWrapper = styled.section`
  padding: 20px;
  min-height: 100vh;
  background: var(--background-body);
`;

export const PageUserTitle = styled.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  font-size: 61px;
  margin-bottom: 30px;
  color: var(--color-text);
`;

export const PageUserDescription = styled.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  font-size: 41px;
  margin-bottom: 20px;
  color: var(--color-text);
`;

export const StyledScrollToTop = styled(ScrollToTop)`
  width: 150px;
  height: 50px;
  border-radius: 50% !important;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-body) !important;
  transition: var(--transition);

  svg {
    fill: var(--color-text);

    &:hover {
      fill: var(--buttonHover);
    }
  }

  &:hover {
    background-color: var(--color-text) !important;
  }
`;
