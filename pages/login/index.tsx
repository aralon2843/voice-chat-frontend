import Login from '../../components/Login/Login';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { LoginWrapper } from './Styles';

export default function LoginPage() {
  return (
    <MainContainer>
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </MainContainer>
  );
}
