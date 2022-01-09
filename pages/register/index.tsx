import { MainContainer } from '../../components/MainContainer/MainContainer';
import Register from '../../components/Register/Register';
import { RegisterWrapper } from './Styles';

export default function RegisterPage() {
  return (
    <MainContainer>
      <RegisterWrapper>
        <Register />
      </RegisterWrapper>
    </MainContainer>
  );
}
