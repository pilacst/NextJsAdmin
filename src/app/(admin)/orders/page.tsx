'use client'

import { useAppSelector } from "@/lib/hooks";

const Orders = () => {
  const authState = useAppSelector((state) => state.user);
  return <div>Orders {authState.firstName}</div>;
};

export default Orders;
