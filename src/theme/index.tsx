import { ReactNode, useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider
} from '@mui/material/styles';

import breakpoints from './breakpoints';
import palette from './palette';
import typography from './typography';
// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children, }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints,
      shape: {
        borderRadius: 5,
      },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </MUIThemeProvider>
  );
}
