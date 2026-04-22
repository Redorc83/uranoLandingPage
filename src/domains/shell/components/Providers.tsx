'use client';
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

import * as React from 'react';
import { Suspense } from 'react';
import { useReferralCapture } from './useReferralCapture';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import theme from '@/theme/theme';
import { WalletProvider } from '@/shared/wallet';

function RefCapture() { useReferralCapture(); return null; }

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <WalletProvider>
          <Suspense><RefCapture /></Suspense>
          {children}
        </WalletProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
