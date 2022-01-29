import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface ExploreState {
  exploreUser: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: ExploreState = {
  exploreUser: {} as IUser,
  isLoading: false,
  error: "",
};

export const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    exploreFetching(state) {
      state.isLoading = true;
    },
    exploreFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = "";
      state.exploreUser = action.payload;
    },
    exploreFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default exploreSlice.reducer;
