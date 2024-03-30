import IAuth from '@/contracts/Auth.Interface';

export type TAuthContext = {
  authInfo: IAuth;
  setAuthInfo(authInfo: IAuth): any;
};
