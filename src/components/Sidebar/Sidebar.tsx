import { Link } from "react-router-dom";
import { Container } from "../App/App.styles";
import {
  SidebarMenuList,
  SidebarMenuListItem,
  SidebarWrapper,
} from "./Sidebar.styles";

const Sidebar: React.FC = (): JSX.Element => {
  const currentUserId = localStorage.getItem("currentUserId");

  return (
    <SidebarWrapper>
      <Container>
        <SidebarMenuList>
          <SidebarMenuListItem>
            <Link to={`/user/${currentUserId}`}>Profile</Link>
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
