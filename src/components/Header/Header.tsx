import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { Container } from "../App/App.styles";
import { ExitButton, GreetingButton, HeaderInner, HeaderWrapper, Logo } from "./Header.styles";

interface IHeader {
  logout?: () => void;
}

export const Header: React.FC<IHeader> = ({ logout }): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  const logoutUser = (): void => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("currentUserId");
    setAccessToken(null);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken]);

  const username = useAppSelector(state => state.userReducer.currentUser.username)

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo />
          {/* <ExitButton onClick={logoutUser}>Exit</ExitButton> */}
          <GreetingButton>Hello, {username}!</GreetingButton>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};
