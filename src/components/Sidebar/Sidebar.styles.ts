import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  flex: 1 1 20%;
  max-width: 400px;
  min-height: 350px;
  background-color: ${({ theme }) => theme.colors.grey};
  margin-top: 90px;
  margin-right: 15px;
  border-radius: 15px;
  padding-left: 25px;
  padding-top: 10px;
`;

export const SidebarMenuList = styled.ul`
  margin-top: 15px;
`;

export const SidebarMenuListItem = styled.li`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  font-weight: 500;
`;
