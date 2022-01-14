import { IUser } from '../../models/IUser';
import { Container } from '../../styles/AppStyles';
import Post from '../Post/Post';
import {
  ActivityDescr,
  ActivityDescrItem,
  Avatar,
  Fullname,
  Location,
  Nickname,
  PostsWrapper,
  ProfileInfo,
  ProfileWrapper,
} from './Profile.styles';

const posts = [
  {
    avatar:
      'https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album',
    fullname: 'Max Tereshchenko',
    nickname: '@aralon2843',
    date: '2',
    text: 'Всем привет это я Максим!)',
    commentsCount: 22,
    likesCount: 32,
  },
  {
    avatar:
      'https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album',
    fullname: 'Max Tereshchenko',
    nickname: '@aralon2843',
    date: '2',
    text: 'Всем привет это я Максим!)',
    commentsCount: 22,
    likesCount: 32,
  },
  {
    avatar:
      'https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album',
    fullname: 'Max Tereshchenko',
    nickname: '@aralon2843',
    date: '2',
    text: 'Всем привет это я Максим!)',
    commentsCount: 22,
    likesCount: 32,
  },
  {
    avatar:
      'https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album',
    fullname: 'Max Tereshchenko',
    nickname: '@aralon2843',
    date: '2',
    text: 'Всем привет это я Максим!)',
    commentsCount: 22,
    likesCount: 32,
  },
];

interface IProfile {
  user: IUser | undefined;
}

const Profile: React.FC<IProfile> = ({ user }): JSX.Element => {
  return (
    <Container>
      <ProfileWrapper>
        <ProfileInfo>
          <Avatar
            src="https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album"
            width={100}
            height={100}
          />
          <Fullname>Max Tereshchenko</Fullname>
          <Nickname>@{user?.username}</Nickname>
          <Location>{user?.city}</Location>
          <ActivityDescr>
            <ActivityDescrItem>
              Tweets <span>127</span>
            </ActivityDescrItem>
            <ActivityDescrItem>
              Followers <span>{user?.followers.length}</span>
            </ActivityDescrItem>
            <ActivityDescrItem>
              Following<span>{user?.followings.length}</span>
            </ActivityDescrItem>
          </ActivityDescr>
        </ProfileInfo>
        <PostsWrapper>
          {posts.map((post) => (
            <Post
              key={post.date}
              avatar={post.avatar}
              fullname={post.fullname}
              nickname={post.nickname}
              date={post.date}
              text={post.text}
              commentsCount={post.commentsCount}
              likesCount={post.likesCount}
            />
          ))}
        </PostsWrapper>
      </ProfileWrapper>
    </Container>
  );
};

export default Profile;
