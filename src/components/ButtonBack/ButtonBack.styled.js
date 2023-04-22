import styled from 'styled-components';

export const BtnBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  background-color: var(--background-body);
  border-radius: 30px;
  border: none;
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  transition: background-color 0.4s;
  -webkit-transition: background-color 0.4s;
  -moz-transition: background-color 0.4s;
  -ms-transition: background-color 0.4s;
  -o-transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background: #fefe;
  }
`;
