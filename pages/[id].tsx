import { MainContainer } from '../components/MainContainer/MainContainer';
import Profile from '../components/Profile/Profile';

const ProfilePage: React.FC = (): JSX.Element => {
  return (
    <MainContainer title="Profile">
      <Profile />
    </MainContainer>
  );
};

export default ProfilePage;
