import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '@/models/users';

// Slice de información de usuarios

const initialState: UserState = {
  username: null,
  gender: null,
  first_name: null,
  last_name: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: UserState, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.gender = action.payload.gender;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
    },
    logoutUserData: (state: UserState) => {
      state.username = null;
      state.gender = null;
      state.first_name = null;
      state.last_name = null;
      state.email = null;
    },
  },
});

export const { setUserData, logoutUserData } = userSlice.actions;
export default userSlice.reducer;
