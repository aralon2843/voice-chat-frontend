import Head from 'next/head';
import React from 'react';
import { Container, Content, Wrapper } from '../../styles/AppStyles';
import { Header } from '../Header/Header';

interface IMainContainer {
  children: React.ReactNode;
  title: string;
  pt?: number;
  logout: () => void;
}

export const MainContainer: React.FC<IMainContainer> = ({
  children,
  title,
  pt,
  logout,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Wrapper>
        <Header logout={logout} />
        <Container>
          <Content pt={pt === 0 ? pt : 70}>{children}</Content>
        </Container>
      </Wrapper>
    </>
  );
};
