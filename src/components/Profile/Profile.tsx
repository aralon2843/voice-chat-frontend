import MainContainer from "../MainContainer/MainContainer";
import {
  ActivityDescr,
  ActivityDescrItem,
  Avatar,
  Location,
  PostsWrapper,
  PostTextArea,
  PostTextAreaWrapper,
  ProfileInfo,
  ProfileWrapper,
  SendPostIcon,
  Username,
} from "./Profile.styles";
import sendIcon from "../../assets/icons/send.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchUser } from "../../store/actionCreators/userActionCreators";
import Post from "../Post/Post";
import { postAPI } from "../../services/postService";

const Profile: React.FC = (): JSX.Element => {
  const currentUser = useAppSelector((state) => state.userReducer.currentUser);
  const me = useAppSelector((state) => state.userReducer.me);

  const isMe = me._id === currentUser._id;

  const params = useParams();
  const dispatch = useAppDispatch();

  const {
    data: posts,
    isError: isPostsError,
    isLoading: isPostsLoading,
    isSuccess: isPostsSuccess,
  } = postAPI.useGetPostsByUserIdQuery(currentUser._id, {
    skip: !currentUser._id,
  });

  const [
    postRequest,
    {
      isError: isPostRequestError,
      isLoading: isPostRequestLoaing,
      isSuccess: isPostRequestSuccess,
    },
  ] = postAPI.usePostMutation();

  const [deletePost, {}] = postAPI.useDeleteMutation();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchUser(params.id));
    }
  }, [params]);

  const [newPostBody, setNewPostBody] = useState<string>("");

  const onTextareaChangeHandle = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewPostBody(e.target.value);
  };

  const onSendPostClickHandle = (): void => {
    if (newPostBody.trim() !== "") {
      postRequest({ authorId: me._id, body: newPostBody });
      setNewPostBody("");
    }
  };

  const onDeletePostClickHandler = (postId: string): void => {
    deletePost(postId);
  };

  return (
    <MainContainer>
      <ProfileWrapper>
        <ProfileInfo>
          <Avatar
            src="https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album"
            width={100}
            height={100}
          />
          <Username>@{isMe ? me.username : currentUser.username}</Username>
          <Location>Luhansk</Location>
          <ActivityDescr>
            <ActivityDescrItem>
              Posts <span>{posts?.length}</span>
            </ActivityDescrItem>
            <ActivityDescrItem>
              Followers{" "}
              <span>
                {isMe ? me?.followers?.length : currentUser?.followers?.length}
              </span>
            </ActivityDescrItem>
            <ActivityDescrItem>
              Following
              <span>
                {isMe
                  ? me?.followings?.length
                  : currentUser?.followings?.length}
              </span>
            </ActivityDescrItem>
          </ActivityDescr>
        </ProfileInfo>
        <PostsWrapper>
          <PostTextAreaWrapper>
            {isMe && (
              <>
                <Avatar
                  src="https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album"
                  width={60}
                  height={60}
                />
                <PostTextArea
                  placeholder="What's new?"
                  onChange={(e) => onTextareaChangeHandle(e)}
                  value={newPostBody}
                />
                <SendPostIcon
                  src={sendIcon}
                  onClick={onSendPostClickHandle}
                  alt="send"
                ></SendPostIcon>
              </>
            )}
          </PostTextAreaWrapper>
          {posts &&
            [...posts]
              .reverse()
              .map((post) => (
                <Post
                  key={post._id}
                  id={post._id}
                  avatar={currentUser?.profilePicture}
                  username={post.authorId}
                  date={new Date(post.createdAt).toLocaleDateString()}
                  text={post.body}
                  commentsCount={post.comments.length}
                  likesCount={post.likes.length}
                  userId={currentUser?._id}
                  onDeletePostClickHandler={onDeletePostClickHandler}
                />
              ))}
        </PostsWrapper>
      </ProfileWrapper>
    </MainContainer>
  );
};

export default Profile;
