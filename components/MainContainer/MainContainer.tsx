import React from 'react';
import { Container, Content, Wrapper } from '../../styles/AppStyles';
import { Header } from '../Header/Header';

interface IMainContainer {
  children: React.ReactNode;
}

export const MainContainer: React.FC<IMainContainer> = ({
  children,
}): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};
