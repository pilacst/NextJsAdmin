'use client';

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  ListItemText,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { permanentRedirect  } from 'next/navigation'
import * as Yup from 'yup';

import {GetAuthToken} from '@/app/api/Api';
import IUser from '@/app/contracts/User.Interface';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setUser } from '@/lib/feature/user/userSlice';
const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const [userDetails, setUserDetails] = useState<IUser>({
    email : '',
    firstName : '',
    lastName : '',
    mobileNumber : '',
    userName : ''
  });
  const dispatch = useAppDispatch()

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log('asdsadsads')
    console.log('useEffect  ', userDetails)
    dispatch(setUser(userDetails));
    console.log('5555555 ', authState)
    if(userDetails.firstName)
      permanentRedirect('/dashboard');
  },[userDetails])

  const authState = useAppSelector((state: any) => state.user);

  const submit = async (values: any) => {
    var response = await GetAuthToken({userName: values.username, password: values.password})
    console.log('submit response  ', response)
    if(!!response){
      var user: IUser = {
        email : response.user.email,
        firstName : response.user.firstName,
        lastName : response.user.lastName,
        mobileNumber : response.user.phoneNumber,
        userName : response.user.userName
      }
      setUserDetails(user)
    }
  }

  return (
    <Card>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
        <Formik
          initialValues={{
            username: '',
            password: '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required('Username is required'),
            password: Yup.string().max(255).required('Password is required'),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await submit(values);
              setStatus({ success: false });
              setSubmitting(false);
            } catch (err: any) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="username-login">Username</InputLabel>
                    <OutlinedInput
                      id="username-login"
                      type="text"
                      value={values.username}
                      name="username"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter username"
                      fullWidth
                      error={Boolean(touched.username && errors.username)}
                    />
                    {touched.username && errors.username && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-email-login"
                      >
                        {errors.username}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="password-login">Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                      id="-password-login"
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                          >
                            {showPassword ? (
                              <EyeOutlined />
                            ) : (
                              <EyeInvisibleOutlined />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Enter password"
                    />
                    {touched.password && errors.password && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-password-login"
                      >
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>

                <Grid item xs={12} sx={{ mt: -1 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={(event) => setChecked(event.target.checked)}
                          name="checked"
                          color="primary"
                          size="small"
                        />
                      }
                      label={
                        <Typography variant="h6">Keep me sign in</Typography>
                      }
                    />
                    {/* <Link
                      variant="h6"
                      component={RouterLink}
                      to=""
                      color="text.primary"
                    >
                      Forgot Password?
                    </Link> */}
                  </Stack>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  {/* <AnimateButton> */}
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                  {/* </AnimateButton> */}
                </Grid>
                <Grid item xs={12}>
                  <Divider>
                    <Typography variant="caption"> Login with</Typography>
                  </Divider>
                </Grid>
                <Grid item xs={12}>
                  {/* <FirebaseSocial /> */}
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
      <Link href="/dashboard"> <ListItemText primary={authState.firstName} /> </Link>
    </Card>
  );
};

// Login.getLayout = DefaultLayout;

export default SignIn;
