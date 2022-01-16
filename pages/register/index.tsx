import { MainContainer } from '../../components/MainContainer/MainContainer';
import Register from '../../components/Register/Register';
import { RegisterWrapper } from './Styles';

export default function RegisterPage() {
  return (
    <MainContainer title="Register" pt={0} isSidebarHidden={true}>
      <RegisterWrapper>
        <Register />
      </RegisterWrapper>
    </MainContainer>
  );
}
