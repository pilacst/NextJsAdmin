'use client'

import { AuthContext } from "@/context/AuthContextProvider";
import { useAppSelector } from "@/lib/hooks";
import { useContext } from "react";

const Orders = () => {
  const context = useContext(AuthContext);
  const authState = useAppSelector((state) => state.user);
  return <div>Orders {authState.firstName} {context?.authInfo?.fullName}</div>;
};

export default Orders;
