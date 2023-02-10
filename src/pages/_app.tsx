import '@/styles/globals.css';
import ThemeProvider from '@/theme';
import GlobalStyles from '@/theme/globalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
