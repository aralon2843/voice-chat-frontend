import { getUser } from "../../api/user";
import { exploreSlice } from "../reducers/exploreSlice";
import { AppDispatch } from "../store";

export const exploreUser = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(exploreSlice.actions.exploreFetching());
    const user = await getUser(id);
    dispatch(exploreSlice.actions.exploreFetchingSuccess(user));
  } catch (e) {
    dispatch(exploreSlice.actions.exploreFetchingError("Something went wrong"));
  }
};
