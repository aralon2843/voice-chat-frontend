import Image from 'next/image';
import Link from 'next/link';
import { FlexContainer } from '../../styles/AppStyles';
import { Avatar, Nickname } from '../Profile/Profile.styles';
import {
  CommentsCount,
  Date,
  DeleteButton,
  LikesCount,
  PostFooter,
  PostHeader,
  PostInner,
  PostWrapper,
  Text,
} from './Post.styles';
const heartIcon = require('../../public/heart.svg');
const commentIcon = require('../../public/comment.svg');

interface IPost {
  id: string;
  avatar: string | null | undefined;
  username: string;
  date: string;
  text: string;
  commentsCount: number;
  likesCount: number;
  userId: string | undefined;
  onDeletePostClickHandler: (postId: string) => void;
}

const Post: React.FC<IPost> = ({
  id,
  avatar,
  username,
  date,
  text,
  commentsCount,
  likesCount,
  userId,
  onDeletePostClickHandler,
}): JSX.Element => {
  return (
    <PostWrapper>
      <Link href={`/${userId}`}>
        <a>
          <Avatar
            src={
              avatar ??
              'https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album'
            }
            width={40}
            height={40}
          />
        </a>
      </Link>
      <PostInner>
        <PostHeader>
          <Link href={`/${userId}`}>
            <a>
              <Nickname>@{username}</Nickname>
            </a>
          </Link>

          <Date>{date}</Date>
          <DeleteButton onClick={() => onDeletePostClickHandler(id)}>
            x
          </DeleteButton>
        </PostHeader>

        <Text>{text}</Text>
        <PostFooter>
          <FlexContainer align="center">
            <Image
              src={commentIcon}
              width={20}
              height={20}
              alt="comment icon"
            />
            <CommentsCount>{commentsCount}</CommentsCount>
          </FlexContainer>
          <FlexContainer align="center">
            <Image src={heartIcon} width={20} height={20} alt="like icon" />
            <LikesCount>{likesCount}</LikesCount>
          </FlexContainer>
        </PostFooter>
      </PostInner>
    </PostWrapper>
  );
};

export default Post;
