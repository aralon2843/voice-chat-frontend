import Router from 'next/router';
import { useEffect, useState } from 'react';
import { MainContainer } from '../components/MainContainer/MainContainer';
import Profile from '../components/Profile/Profile';

const ProfilePage: React.FC = (): JSX.Element => {
  const ISSERVER = typeof window === 'undefined';
  const [accessToken, setAccessToken] = useState(
    !ISSERVER && localStorage.getItem('access_token')
  );

  useEffect(() => {
    !accessToken && Router.push('/login');
  }, [accessToken]);

  const logoutUser = (): void => {
    if (!ISSERVER) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('currentUserId');
    }
    setAccessToken('');
  };
  //localStorage.removeItem('currentUserId');
  return (
    <MainContainer title="Profile" logout={logoutUser}>
      <Profile />
    </MainContainer>
  );
};

export default ProfilePage;
