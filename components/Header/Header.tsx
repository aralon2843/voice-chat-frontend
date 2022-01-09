import React from 'react';
import { Container } from '../../styles/AppStyles';
import { ExitButton, HeaderInner, HeaderWrapper, Logo } from './Header.styles';

export const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo />
          <ExitButton>Exit</ExitButton>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};
