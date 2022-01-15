import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MainContainer } from '../components/MainContainer/MainContainer';
import Profile from '../components/Profile/Profile';
import { IUser } from '../models/IUser';
import { postAPI } from '../services/postService';
import { userAPI } from '../services/userService';

interface IProfilePage {
  user: IUser;
}

const ProfilePage: React.FC<IProfilePage> = ({}): JSX.Element => {
  const ISSERVER = typeof window === 'undefined';
  const [accessToken, setAccessToken] = useState(
    !ISSERVER && localStorage.getItem('access_token')
  );
  const currentUserId = !ISSERVER && localStorage.getItem('currentUserId');

  const router = useRouter();

  const {
    data: user,
    isError: isUserError,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = userAPI.useGetUserQuery(router.query.id); //idk how handle this

  const {
    data: posts,
    isError: isPostsError,
    isLoading: isPostsLoading,
    isSuccess: isPostsSuccess,
  } = postAPI.useGetPostsByUserIdQuery(router.query.id); //idk how handle this

  const [deletePost, {}] = postAPI.useDeleteMutation();

  const [
    postRequest,
    {
      isError: isPostRequestError,
      isLoading: isPostRequestLoaing,
      isSuccess: isPostRequestSuccess,
    },
  ] = postAPI.usePostMutation();

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
      <Profile
        currentUserId={currentUserId}
        user={user}
        posts={posts && [...posts].reverse()}
        postRequest={postRequest} //oi blyat kak ono menya zaebalo, chto ti hochesh ot menya
        deletePost={deletePost} //oi blyat kak ono menya zaebalo, chto ti hochesh ot menya
      />
    </MainContainer>
  );
};

export default ProfilePage;
