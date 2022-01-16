import Link from 'next/link';
import { Container } from '../../styles/AppStyles';
import {
  SidebarMenuList,
  SidebarMenuListItem,
  SidebarWrapper,
} from './Sidebar.styles';

interface ISidebar {
  currentUserId?: string | false | null;
}

const Sidebar: React.FC<ISidebar> = ({ currentUserId }): JSX.Element => {
  return (
    <SidebarWrapper>
      <Container>
        <SidebarMenuList>
          <SidebarMenuListItem>
            <Link href={`/${currentUserId}`}>
              <a>Profile</a>
            </Link>
          </SidebarMenuListItem>
          <SidebarMenuListItem>
            <Link href={'/feed'}>
              <a>Feed</a>
            </Link>
          </SidebarMenuListItem>
          <SidebarMenuListItem>
            <Link href={'/messages'}>
              <a>Messages</a>
            </Link>
          </SidebarMenuListItem>
          <SidebarMenuListItem>
            <Link href={'/explore'}>
              <a>Explore</a>
            </Link>
          </SidebarMenuListItem>
        </SidebarMenuList>
      </Container>
    </SidebarWrapper>
  );
};

export default Sidebar;
