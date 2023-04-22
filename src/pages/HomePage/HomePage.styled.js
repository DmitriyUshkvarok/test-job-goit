import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const SectionHomePage = styled.section`
  height: 100vh;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;

export const HomePageTitle = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 60px;
  font-weight: bold;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow: 0 0 50px blue;
  margin-top: 50px;
  margin-bottom: 30px;
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
