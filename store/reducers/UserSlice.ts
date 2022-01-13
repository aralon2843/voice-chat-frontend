import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface UserState {
  user: IUser | [];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default userSlice.reducer;
