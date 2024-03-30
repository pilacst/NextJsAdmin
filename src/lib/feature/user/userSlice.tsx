import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IUser from '@/contracts/User.Interface';

const initialState: IUser = {
  email: '',
  firstName: '',
  lastName: '',
  mobileNumber: '',
  userName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.mobileNumber = action.payload.mobileNumber;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
