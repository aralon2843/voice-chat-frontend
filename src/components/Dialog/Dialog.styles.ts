import styled from "styled-components";

export const DialogWrapper = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.semiDarkGrey};
  flex: 1 1 65%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 0 20px;
  height: 80vh;
  position: relative;
  height: 100%;
  overflow-y: auto;
`;

export const Messages = styled.div`
  flex: 0 0 90%;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.div<{ isMe: boolean }>`
  display: inline-block;
  margin-bottom: 15px;
  text-align: ${({ isMe }) => (isMe ? "right" : "left")};
  background-color: ${({ theme, isMe }) =>
    isMe ? theme.colors.semiLightGrey : theme.colors.semiDarkGrey};
  border-radius: 15px;
  padding: 15px 10px;
  width: 100%;
  position: relative;
`;

export const MessageDate = styled.span<{ isMe: boolean }>`
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 2px 4px;
  position: absolute;
  bottom: 7px;
  ${({ isMe }) => (isMe ? "left: 7px" : "right: 7px")};
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

export const MessageTextArea = styled.textarea`
  width: 90%;
  resize: none;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
`;
