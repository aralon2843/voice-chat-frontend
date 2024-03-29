import { Container, Content, FlexContainer, Wrapper } from "../App/App.styles";
import { Header } from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

interface IMainContainer {
  children: React.ReactNode;
  pt?: number;
  isSidebarHidden?: boolean;
}

const MainContainer: React.FC<IMainContainer> = ({
  children,
  pt,
  isSidebarHidden,
}): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content pt={pt === 0 ? pt : 70}>
          <FlexContainer justify="center" align="flex-start">
            {!isSidebarHidden && <Sidebar />}
            {children}
          </FlexContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default MainContainer;
