import Login from '../../components/Login/Login';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { LoginWrapper } from './Styles';

export default function LoginPage() {
  return (
    <MainContainer title="Login" pt={0}>
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </MainContainer>
  );
}
