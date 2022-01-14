import { GetServerSideProps } from 'next';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MainContainer } from '../components/MainContainer/MainContainer';
import Profile from '../components/Profile/Profile';
import { IUser } from '../models/IUser';
import { userAPI } from '../services/userService';

interface IProfilePage {
  user: IUser;
}

const ProfilePage: React.FC<IProfilePage> = ({}): JSX.Element => {
  const ISSERVER = typeof window === 'undefined';
  const [accessToken, setAccessToken] = useState(
    !ISSERVER && localStorage.getItem('access_token')
  );

  const router = useRouter();

  const {
    data: user,
    isError,
    isLoading,
    isSuccess,
  } = userAPI.useGetUserQuery(router.query.id); //idk how handle this 

  console.log(user);

  const logoutUser = (): void => {
    if (!ISSERVER) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('currentUserId');
    }
    setAccessToken('');
  };

  useEffect(() => {
    !accessToken && Router.push('/login');
  }, [accessToken, router.isReady]);

  return (
    <MainContainer title="Profile" logout={logoutUser}>
      <Profile user={user} />
    </MainContainer>
  );
};

export default ProfilePage;
