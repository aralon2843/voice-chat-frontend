import { Link } from "react-router-dom";
import { FlexContainer } from "../App/App.styles";
import { Avatar, Username } from "../Profile/Profile.styles";
import {
  CommentIcon,
  CommentsCount,
  Date,
  DeleteButton,
  LikeIcon,
  LikesCount,
  PostFooter,
  PostHeader,
  PostInner,
  PostWrapper,
  Text,
} from "./Post.styles";
import heartIcon from "../../assets/icons/heart.svg";
import commentIcon from "../../assets/icons/comment.svg";

interface IPost {
  id: string;
  avatar: string | null;
  username: string;
  date: string;
  text: string;
  commentsCount: number;
  likesCount: number;
  userId: string;
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
      <Link to={`/user/${userId}`}>
        <Avatar
          src={
            "https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album"
          }
          width={40}
          height={40}
        />
      </Link>
      <PostInner>
        <PostHeader>
          <Link to={`/user/${username}`}>
            <Username>@{username}</Username>
          </Link>

          <Date>{date}</Date>
          <DeleteButton onClick={() => onDeletePostClickHandler(id)}>
            x
          </DeleteButton>
        </PostHeader>

        <Text>{text}</Text>
        <PostFooter>
          <FlexContainer align="center">
            <CommentIcon src={commentIcon} alt="comment icon" />
            <CommentsCount>{commentsCount}</CommentsCount>
          </FlexContainer>
          <FlexContainer align="center">
            <LikeIcon src={heartIcon} alt="like icon" />
            <LikesCount>{likesCount}</LikesCount>
          </FlexContainer>
        </PostFooter>
      </PostInner>
    </PostWrapper>
  );
};

export default Post;
