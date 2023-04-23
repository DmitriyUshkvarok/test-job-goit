import React from 'react';
import Container from 'components/Container/Container';
import {
  FooterList,
  FooterItem,
  FooterLink,
  FooterCopyright,
} from './Footer.styled';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <Container>
      <FooterList>
        <FooterItem>
          <FooterLink
            href="https://github.com/DmitriyUshkvarok"
            target="_blank"
          >
            <GoMarkGithub size={50} color="var(--color-text)" />
          </FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterCopyright>
            © 2023 Dmitriy Ushkvarok. All rights reserved. Developed for a test
            assignment at GoIT IT-school.
          </FooterCopyright>
        </FooterItem>
        <FooterItem>
          <FooterLink
            href="https://www.linkedin.com/in/dmitriy-ushkvarok/"
            target="_blank"
          >
            <BsLinkedin size={50} color="var(--color-text)" />
          </FooterLink>
        </FooterItem>
      </FooterList>
    </Container>
  );
};

export default Footer;
