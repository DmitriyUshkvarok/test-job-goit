import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const SectionHomePage = styled.section`
  min-height: 100vh;
  background: var(--backgroundHome);
  padding: 20px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HomePageTitle = styled.h1`
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow: 0 0 50px blue;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 530px) {
    font-size: 40px;
  }
`;

export const StyledFaReact = styled(FaReact)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const FooterContainer = styled.div`
  margin-top: auto;

  @media screen and (max-width: 530px) {
    font-size: 40px;
  }
`;
