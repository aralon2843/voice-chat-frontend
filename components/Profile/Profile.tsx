import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';
import { Container } from '../../styles/AppStyles';
import Post from '../Post/Post';
import {
  ActivityDescr,
  ActivityDescrItem,
  Avatar,
  Location,
  Nickname,
  PostsWrapper,
  PostTextArea,
  PostTextAreaWrapper,
  ProfileInfo,
  ProfileWrapper,
  SendPostIcon,
} from './Profile.styles';

import sendIcon from '../../public/send.svg';

interface IProfile {
  currentUserId: string | null | false;
  user: IUser | undefined;
  posts: IPost[] | undefined;
  postRequest: ({
    authorId,
    body,
  }: {
    authorId: string;
    body: string;
  }) => IPost;
  deletePost: (postId: string) => IPost;
}

const Profile: React.FC<IProfile> = ({
  currentUserId,
  user,
  posts,
  postRequest,
  deletePost,
}): JSX.Element => {
  const [newPostBody, setNewPostBody] = useState<string>('');

  const onTextareaChangeHandle = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewPostBody(e.target.value);
  };

  const onSendPostClickHandle = (): void => {
    if (currentUserId && newPostBody.trim() !== '') {
      postRequest({ authorId: currentUserId, body: newPostBody });
      setNewPostBody('');
    }
  };

  const onDeletePostClickHandler = (postId: string): void => {
    deletePost(postId);
  };

  return (
    <Container>
      <ProfileWrapper>
        <ProfileInfo>
          <Avatar
            src={
              user?.profilePicture ??
              'https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album'
            }
            width={100}
            height={100}
          />
          <Nickname>@{user?.username}</Nickname>
          <Location>{user?.city}</Location>
          <ActivityDescr>
            <ActivityDescrItem>
              Posts <span>{posts?.length}</span>
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
          <PostTextAreaWrapper>
            <Avatar
              src={
                user?.profilePicture ??
                'https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album'
              }
              width={60}
              height={60}
            />
            <PostTextArea
              placeholder="What's new?"
              onChange={(e) => onTextareaChangeHandle(e)}
              value={newPostBody}
            />
            <SendPostIcon onClick={onSendPostClickHandle}>
              <Image src={sendIcon} width={25} height={25} alt="send" />
            </SendPostIcon>
          </PostTextAreaWrapper>
          {posts?.map((post) => (
            <Post
              key={post._id}
              id={post._id}
              avatar={user?.profilePicture}
              username={post.authorId}
              date={new Date(post.createdAt).toLocaleDateString()}
              text={post.body}
              commentsCount={post.comments.length}
              likesCount={post.likes.length}
              userId={user?._id}
              onDeletePostClickHandler={onDeletePostClickHandler}
            />
          ))}
        </PostsWrapper>
      </ProfileWrapper>
    </Container>
  );
};

export default Profile;
