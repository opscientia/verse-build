/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import { Box, Button, ButtonProps } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

import useWalletConnector from '@/hooks/useWalletConnector';

import { colorGradients } from './Style';

interface IProps {
  titleConnect?: string;
  titleDisconnect?: string;
  sx?: ButtonProps;
  onClick?: any;
}

export default function WalletConnectBtn({ titleConnect, titleDisconnect, sx, onClick, }: IProps) {
  const router = useRouter();
  const account = useAccount();
  const { address, } = account;
  const { onConnect, } = useWalletConnector();

  useEffect(() => {
    if (address) {
      // router.push('/selectProfile');
    }
  }, [address, router]);

  useEffect(() => {
    // if (address)
    onConnect();
  }, [address]);

  return (
    <div>
      <ConnectButton.Custom>
        {({
          account, chain, openAccountModal, openChainModal, openConnectModal, mounted,
        }) => {
          return (
            <div
              {...(!mounted && {
                'aria-hidden': true,
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                    <Button
                      fullWidth
                      variant='contained'
                      onClick={() => {
                        openConnectModal();

                        if (titleConnect === 'Sign In') {
                          onClick();
                        }
                      }}
                      sx={{
                        background: colorGradients.newBackgroundGradients,
                        borderRadius: '12px',
                        py: '12px',
                        fontSize: '16px',
                        color: '#fff',
                        my: 4,
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        gap: 1,
                        ...sx,
                      }}
                    >
                      {titleConnect !== 'Sign In' && (
                        <Box
                          component='img'
                          src='/assets/svg/walletIcon.svg'
                        />
                      )}

                      {titleConnect}
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type='button'
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                    }}
                  >
                    {/* <button
                      onClick={openChainModal}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      type='button'
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              width={12}
                              height={12}
                            />
                          )}
                        </div>
                      )}

                      {chain.name}
                    </button> */}

                    <Button
                      onClick={() => {
                        openAccountModal();

                        router.push('/selectProfile');

                        if (titleConnect === 'Sign In') {
                          onClick();
                        }
                      }}
                      sx={{
                        background: colorGradients.newBackgroundGradients,
                        borderRadius: '12px',
                        py: '12px',
                        fontSize: '16px',
                        color: '#fff',
                        my: 4,
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        gap: 1,
                        ...sx,
                      }}
                    >
                      {account.displayName}

                      {account.displayBalance ? ` (${account.displayBalance})` : ''}
                    </Button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}
