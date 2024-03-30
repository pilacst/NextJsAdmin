'use client';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FallbackBackdrop from '@/components/FallbackBackdrop';

import StoreProvider from '@/lib/StoreProvider';
import { AuthContextProvider } from '@/context/AuthContextProvider';

const defaultTheme = createTheme();

const DefaultLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AuthContextProvider>
      <StoreProvider>
        <ThemeProvider theme={defaultTheme}>
          <React.Suspense fallback={<FallbackBackdrop />}>
            {children}
          </React.Suspense>
        </ThemeProvider>
      </StoreProvider>
    </AuthContextProvider>
  );
};

export default DefaultLayout;
