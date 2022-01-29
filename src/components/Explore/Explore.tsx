import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { exploreUser } from "../../store/actionCreators/exploreActionCreators";
import { FlexContainer } from "../App/App.styles";
import MainContainer from "../MainContainer/MainContainer";
import {
  ActivityDescr,
  ActivityDescrItem,
  Avatar,
  Location,
  ProfileInfo,
  Username,
} from "../Profile/Profile.styles";
import { ExploreButton, ExploreInput, ExploreWrapper } from "./Explore.styles";

const Explore: React.FC = (): JSX.Element => {
  const [exploreId, setExploreId] = useState<string>("");
  const dispatch = useAppDispatch();

  const exploredUser = useAppSelector(
    (state) => state.exploreReducer.exploreUser
  );

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setExploreId(e.target.value);
  };

  const onButtonClickHandler = (): void => {
    setExploreId("");
    dispatch(exploreUser(exploreId));
  };

  return (
    <MainContainer>
      <ExploreWrapper>
        <FlexContainer align="center" justify="center">
          <ExploreInput
            placeholder="Enter ID to find user"
            value={exploreId}
            onChange={(e) => onInputChangeHandler(e)}
          />
          <ExploreButton onClick={onButtonClickHandler}>Explore</ExploreButton>
        </FlexContainer>
        {Object.keys(exploredUser).length > 0 && (
          <ProfileInfo>
            <Link to={`/user/${exploredUser._id}`}>
              <Avatar
                src="https://sun9-84.userapi.com/impg/nD4pTquyGl-R1hJ6wk42s7VvJCiLXAAn1vKRGg/yXQ8gIhkn4I.jpg?size=1005x986&quality=96&sign=445f708a57cd4c088e0127e6e3523fb7&type=album"
                width={100}
                height={100}
              />
            </Link>
            <Link to={`/user/${exploredUser._id}`}>
              <Username>@{exploredUser.username}</Username>
            </Link>
            <Location>Luhansk</Location>
            <ActivityDescr>
              <ActivityDescrItem>
                Followers
                <span>{exploredUser.followers?.length}</span>
              </ActivityDescrItem>
              <ActivityDescrItem>
                Following
                <span>{exploredUser.followings?.length}</span>
              </ActivityDescrItem>
            </ActivityDescr>
          </ProfileInfo>
        )}
      </ExploreWrapper>
    </MainContainer>
  );
};

export default Explore;
