import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IUser from "@/app/contracts/User.Interface";

const initialState : IUser = {
    email : '',
    firstName : '',
    lastName : '',
    mobileNumber : '',
    userName : ''
}

// export const userSlice = () => createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         user: (state, action: PayloadAction<IUser>) => {
//             state.email = action.payload.email;
//             state.firstName = action.payload.firstName;
//             state.lastName = action.payload.lastName;
//             state.userName = action.payload.userName;
//             state.mobileNumber = action.payload.mobileNumber;
//         }
//     }
// });

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
})

// Action creators are generated for each case reducer function
//export const { user } = userSlice.action;

export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer