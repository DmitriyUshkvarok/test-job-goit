import styled from 'styled-components';

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
`;
export const FooterItem = styled.li`
  max-width: 100%;
`;
export const FooterLink = styled.a``;

export const FooterCopyright = styled.p`
  font-size: 12px;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow: 0 0 50px blue;
`;
