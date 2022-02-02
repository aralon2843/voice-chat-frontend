import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { fetchMe } from "../../store/actionCreators/userActionCreators";

const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("access_token");
    if (isUserLoggedIn) {
      const user = localStorage.getItem("user");
      const userId = user && JSON.parse(user)._id;
      dispatch(fetchMe(userId));
      navigate(`user/${userId}`);
    } else {
      navigate("/login");
    }
  }, []);

  return <h1>APP</h1>;
};

export default App;
