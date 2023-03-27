import { connectorsForWallets, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
  argentWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import ThemeProvider from '@/theme';
import GlobalStyles from '@/theme/globalStyles';

import { store } from './../redux/store';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : [])],
  [publicProvider()],
);

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({
        chains,
      }),
      trustWallet({
        chains,
      }),
      ledgerWallet({
        chains,
      }),
      injectedWallet({
        chains,
      }),
      rainbowWallet({
        chains,
      }),
      metaMaskWallet({
        chains,
      }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
  // getDefaultWallets: ['email', 'phone', 'google', 'apple', 'facebook', 'microsoft', 'linkedin', 'github', 'discord'],
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
              appInfo={demoAppInfo}
              chains={chains}
              //   particleAuthSort={[
              //     'email',
              //     'phone',
              //     'google',
              //     'apple',
              //     'facebook',
              //     'microsoft',
              //     'linkedin',
              //     'github',
              //     'discord'
              // ]}
            >
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
