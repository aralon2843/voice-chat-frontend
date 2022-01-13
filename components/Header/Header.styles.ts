import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 10px 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.semiDarkBlue};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
`;

export const ExitButton = styled.button`
  background: url('https://cdn-icons-png.flaticon.com/512/1286/1286853.png')
    left/20px no-repeat;
  outline: none;
  padding: 5px 0 5px 30px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  cursor: pointer;
`;
