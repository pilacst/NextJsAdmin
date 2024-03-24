'use client';

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../feature/user/userSlice';

export const store = () => {
  return configureStore({
    reducer: {
      user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

// Infer the type of store
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']