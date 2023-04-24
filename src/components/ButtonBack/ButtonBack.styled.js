import styled from 'styled-components';

export const BtnBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  background: var(--background-body);
  color: var(--color-text);
  border-radius: 30px;
  border: none;
  width: 100px;
  height: 50px;
  transition: background-color 0.4s;
  -webkit-transition: background-color 0.4s;
  -moz-transition: background-color 0.4s;
  -ms-transition: background-color 0.4s;
  -o-transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background: var(--buttonHover);
    color: black;
  }

  @media screen and (max-width: 530px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;
