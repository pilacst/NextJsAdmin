'use client';

import { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';
import IUser from '@/app/contracts/User.Interface';
import { userReducer, setUser } from '@/lib/feature/user/userSlice';

const Dashboard = () => {

  // var user: IUser = {
  //   email : 'pila@gmail.co',
  //   firstName : 'nayanajith',
  //   lastName : 'pilapitiya',
  //   mobileNumber : '719581231',
  //   userName : 'pila'
  // }
  // // const store = useAppStore()
  // // const initialized = useRef(false)
  // // if (!initialized.current) {
  // //   store.dispatch(userReducer(user))
  // //   initialized.current = true
  // // }

  // const dispatch = useAppDispatch()
  // dispatch(setUser(user));
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            Chart
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            Deposits
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            orders
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

// Dashboard.getLayout = AppLayout;
export default Dashboard;