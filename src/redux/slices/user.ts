import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type User = {
  avatar?: string;
};

type UserState = {
  info?: User;
};

const initialState: UserState = {
  info: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User | undefined>) => {
      state.info = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
