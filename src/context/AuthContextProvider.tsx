'use client';
import IAuth from '@/contracts/Auth.Interface';
import { ReactNode, createContext, useState } from 'react';
import { TAuthContext } from '@/types/TAuthContext';

const initialState: IAuth = {
  fullName: 'fdsfsdf sdf sdf',
  isAuthenticated: false,
  token: '',
  userName: '',
};

export const AuthContext = createContext<TAuthContext | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authInfo, setAuthInfo] = useState<IAuth>(initialState);
  const authContextValues: TAuthContext = {
    authInfo,
    setAuthInfo,
  };
  console.log('context-provider ', authInfo);
  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};
