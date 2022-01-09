import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 0px 10px;
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
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Fullname = styled.p<{ mr?: number }>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  margin-bottom: 10px;
  margin-right: ${({ mr }) => (mr ? mr + 'px' : '0')};
`;

export const Nickname = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 500;
`;

export const Location = styled.p`
  margin-bottom: 10px;
`;

export const ActivityDescr = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ActivityDescrItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
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
