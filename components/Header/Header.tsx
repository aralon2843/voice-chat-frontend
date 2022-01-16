import React from 'react';
import { Container } from '../../styles/AppStyles';
import { ExitButton, HeaderInner, HeaderWrapper, Logo } from './Header.styles';

interface IHeader {
  logout?: () => void;
}

export const Header: React.FC<IHeader> = ({ logout }): JSX.Element => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo />
          <ExitButton onClick={logout}>Exit</ExitButton>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};
