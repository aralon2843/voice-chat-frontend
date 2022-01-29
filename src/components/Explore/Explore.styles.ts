import styled from "styled-components";

export const ExploreWrapper = styled.div`
  flex: 1 1 80%;
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  min-height: 350px;
`;

export const ExploreInput = styled.input`
  display: block;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
  border-radius: 15px;
  padding: 7px 10px;
  width: 350px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 15px;
`;

export const ExploreButton = styled.button`
  display: block;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 15px;
  padding: 7px 10px;
  width: 100px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
