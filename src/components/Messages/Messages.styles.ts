import styled from "styled-components";

export const MessagesWrapper = styled.div<{ hasDialogs: boolean }>`
  flex: 1 1 80%;
  display: flex;
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  height: 85vh;
  align-items: ${({ hasDialogs }) => (hasDialogs ? "flex-start" : "center")};
  justify-content: center;
  overflow: hidden;
`;

export const DialogThumbnails = styled.ul`
  flex: 1 1 35%;
  margin-right: 20px;
  height: 100%;
  overflow-y: auto;
`;

export const DialogThumbnail = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const DialogThumbnailPersonAvatar = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 10px;
`;

export const DialogThumbnailPersonUsername = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
`;

export const DialogThumbnailLastMessage = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.white};
`;

export const NoDialogsTitle = styled.p`
	text-align: center;
	font-size: 18px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.lightGrey};
`;