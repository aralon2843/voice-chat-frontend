import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMe } from "../../store/actionCreators/userActionCreators";
import { Container } from "../App/App.styles";
import {
  SidebarMenuList,
  SidebarMenuListItem,
  SidebarWrapper,
} from "./Sidebar.styles";

const Sidebar: React.FC = (): JSX.Element => {
  const meId = useAppSelector((state) => state.userReducer.me._id);

  const dispatch = useAppDispatch();

  const onProfileClickHandler = () => {
    meId && dispatch(fetchMe(meId));
  };

  return (
    <SidebarWrapper>
      <Container>
        <SidebarMenuList>
          <SidebarMenuListItem onClick={onProfileClickHandler}>
            <Link to={`/user/${meId}`}>Profile</Link>
          </SidebarMenuListItem>
          <SidebarMenuListItem>
            <Link to={"/feed"}>Feed</Link>
          </SidebarMenuListItem>
          <SidebarMenuListItem>
            <Link to={"/messages"}>Messages</Link>
          </SidebarMenuListItem>
          <SidebarMenuListItem>
            <Link to={"/explore"}>Explore</Link>
          </SidebarMenuListItem>
        </SidebarMenuList>
      </Container>
    </SidebarWrapper>
  );
};

export default Sidebar;
