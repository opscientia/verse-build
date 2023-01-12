'use client';

import { PropsWithChildren } from 'react';

import ThemeProvider from '../theme';
import GlobalStyles from '../theme/globalStyles';

export default function ThemeProviderConfig({ children, }: PropsWithChildren) {
  return (
    <ThemeProvider>
        <GlobalStyles />

        {children}
    </ThemeProvider>
  );
}
