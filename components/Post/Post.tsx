import Image from 'next/image';
import { FlexContainer } from '../../styles/AppStyles';
import { Avatar, Fullname, Nickname } from '../Profile/Profile.styles';
import {
  CommentsCount,
  Date,
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
  avatar: string;
  fullname: string;
  nickname: string;
  date: string;
  text: string;
  commentsCount: number;
  likesCount: number;
}

const Post: React.FC<IPost> = ({
  avatar,
  fullname,
  nickname,
  date,
  text,
  commentsCount,
  likesCount,
}): JSX.Element => {
  return (
    <PostWrapper>
      <Avatar src={avatar} width={40} height={40} />
      <PostInner>
        <PostHeader>
          <FlexContainer align="center">
            <Fullname mr={8}>{fullname}</Fullname>
            <Nickname>{nickname}</Nickname>
          </FlexContainer>
          <Date>{date} hours ago</Date>
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
