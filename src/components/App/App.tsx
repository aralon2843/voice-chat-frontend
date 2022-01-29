import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { fetchMe } from "../../store/actionCreators/userActionCreators";

const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    } else {
      const meId = localStorage.getItem("currentUserId");
      meId && dispatch(fetchMe(meId));
      navigate(`/user/${meId}`);
    }
  }, [navigate]);

  return <h1>APP</h1>;
};

export default App;
