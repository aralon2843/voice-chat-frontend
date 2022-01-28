import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const PostInner = styled.div`
  margin-left: 15px;
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
  border-radius: 0px 15px 15px 15px;
  color: ${({ theme }) => theme.colors.lightGrey};
  padding: 10px 15px;
  position: relative;
  width: 100%;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Date = styled.span`
  font-size: 12px;
  padding-right: 8px;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;
export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentsCount = styled.div`
  margin-left: 5px;
  font-weight: 500;
`;
export const LikesCount = styled.div`
  margin-left: 5px;
  font-weight: 500;
`;

export const DeleteButton = styled.button`
  width: 5px;
  height: 5px;
  color: ${({ theme }) => theme.colors.darkGrey};
  outline: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 0px;
  background-color: inherit;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

export const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const LikeIcon = styled.img`
  height: 20px;
  width: 20px;
`;
