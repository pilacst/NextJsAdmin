import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IAuth from '@/contracts/Auth.Interface';

const initialState: IAuth = {
  token: '',
  isAuthenticated: false,
  userName: '',
  fullName: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state, action: PayloadAction<IAuth>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      state.fullName = action.payload.fullName;
    },
  },
});

export const { setAuthInfo } = authSlice.actions;

export const authReducer = authSlice.reducer;
