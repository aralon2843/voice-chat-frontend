import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 10px;
  margin-top: 20px;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileInfo = styled.div`
  flex: 0 1 300px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Avatar = styled.img<{ width: number; height: number }>`
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Username = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const Location = styled.p`
  margin-bottom: 10px;
`;

export const ActivityDescr = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ActivityDescrItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  span {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const PostsWrapper = styled.div`
  flex: 0 1 700px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
`;

export const PostTextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const PostTextArea = styled.textarea`
  display: block;
  width: 80%;
  border: none;
  outline: none;
  resize: none;
  min-height: 70px;
  height: 100%;
  max-height: 150px;
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
  border-radius: 0px 15px 15px 15px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SendPostIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
