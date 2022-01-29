import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  me: IUser;
  currentUser: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  me: {} as IUser,
  currentUser: {} as IUser,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    meFetching(state) {
      state.isLoading = true;
    },
    meFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = "";
      state.me = action.payload;
    },
    meFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = "";
      state.currentUser = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
