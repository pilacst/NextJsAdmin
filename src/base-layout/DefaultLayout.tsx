'use client';

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Footer from '@/base-layout/Footer';
import FallbackBackdrop from '@/components/FallbackBackdrop';

import StoreProvider from '@/lib/StoreProvider';
import { AuthContextProvider } from '@/context/AuthContextProvider';

const defaultTheme = createTheme();

const DefaultLayout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return <AuthContextProvider><StoreProvider>
    <ThemeProvider theme={defaultTheme}>
        <React.Suspense fallback={<FallbackBackdrop />}>
          {children}
        </React.Suspense>
    </ThemeProvider>
  </StoreProvider>
  </AuthContextProvider>
}

export default DefaultLayout;