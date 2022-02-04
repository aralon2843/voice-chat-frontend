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

export const Dialog = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.semiDarkGrey};
  flex: 1 1 65%;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 80vh;
  position: relative;
  height: 100%;
  overflow-y: auto;
`;

export const Message = styled.div<{ isMe: boolean }>`
  display: inline-block;
  margin-bottom: 15px;
  text-align: ${({ isMe }) => (isMe ? "right" : "left")};
`;

export const MessageAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 5px;
`;

export const MessageText = styled.p<{ isMe: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ isMe }) => (isMe ? "right" : "left")};
`;

export const NoDialogsTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const MessageTextArea = styled.textarea`
  width: 90%;
  resize: none;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 15px;
  position: absolute;
  bottom: 0px;
  left: calc(50% + 10px);
  transform: translateX(-50%);
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
`;
