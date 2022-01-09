import styled from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
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

  width: 100%;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Date = styled.span`
  font-size: 12px;
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
