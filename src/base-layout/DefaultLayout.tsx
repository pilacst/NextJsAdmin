'use client';

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Footer from '@/base-layout/Footer';
import FallbackBackdrop from '@/components/FallbackBackdrop';

import { Provider } from 'react-redux';
import { Store } from '@/lib/store';

const defaultTheme = createTheme();

const DefaultLayout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return <Provider store={Store}>
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <React.Suspense fallback={<FallbackBackdrop />}>
              {children}
            </React.Suspense>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  </Provider>
}

export default DefaultLayout;