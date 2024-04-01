import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

type AppSliceState = {
  theme: Theme;
};

const initialState: AppSliceState = {
  theme: 'light',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state: AppSliceState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;
