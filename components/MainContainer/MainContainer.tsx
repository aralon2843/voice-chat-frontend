import Head from 'next/head';
import React from 'react';
import { Container, Content, Wrapper } from '../../styles/AppStyles';
import { Header } from '../Header/Header';

interface IMainContainer {
  children: React.ReactNode;
  title: string;
  pt?: number;
}

export const MainContainer: React.FC<IMainContainer> = ({
  children,
  title,
  pt,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Wrapper>
        <Header />
        <Container>
          <Content pt={pt === 0 ? pt : 70}>{children}</Content>
        </Container>
      </Wrapper>
    </>
  );
};
