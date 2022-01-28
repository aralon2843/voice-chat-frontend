import { getUser } from "../../api/user";
import { userSlice } from "../reducers/userSlice";
import { AppDispatch } from "../store";

export const fetchUser = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    const user = await getUser(id);
    dispatch(userSlice.actions.userFetchingSuccess(user));
  } catch (e) {
    dispatch(userSlice.actions.userFetchingError("Something went wrong"));
  }
};
