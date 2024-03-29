import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IAuth from "@/app/contracts/Auth.Interface";

const initialState : IAuth = {
    token: "",
    isAuthenticated: false,
    userName: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuthInfo: (state, action: PayloadAction<IAuth>) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.token = action.payload.token;
        state.userName = action.payload.userName;
        },
    }
});

export const { setAuthInfo } = authSlice.actions;

export const authReducer = authSlice.reducer;
