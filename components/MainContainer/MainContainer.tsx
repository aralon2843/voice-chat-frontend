import Head from 'next/head';
import React from 'react';
import {
  Container,
  Content,
  FlexContainer,
  Wrapper,
} from '../../styles/AppStyles';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

interface IMainContainer {
  children: React.ReactNode;
  title: string;
  pt?: number;
  isSidebarHidden: boolean;
  currentUserId?: string | null | false;
  logout?: () => void;
}

export const MainContainer: React.FC<IMainContainer> = ({
  children,
  title,
  pt,
  isSidebarHidden,
  currentUserId,
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
          <FlexContainer justify="center" align="flex-start">
            {!isSidebarHidden && <Sidebar currentUserId={currentUserId} />}
            <Content pt={pt === 0 ? pt : 70}>{children}</Content>
          </FlexContainer>
        </Container>
      </Wrapper>
    </>
  );
};
