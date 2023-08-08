/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/naming-convention */
// @ts-nocheck

import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';

import { supportedChainsID } from '@/helpers/chains';
import { changeAccount, changeChainId, changeProvider } from '@/redux/slice/web3';

function useWeb3SubscribeProvider() {
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(changeChainId(null));
    dispatch(changeAccount(null));
    dispatch(changeProvider(null));
  };

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }

    provider.on('disconnect', () => resetAll());

    provider.on('connect', (info: any) => {});

    provider.on('accountsChanged', async (accounts: any) => {
      dispatch(changeAccount(accounts[0]));
    });

    // eslint-disable-next-line consistent-return
    provider.on('chainChanged', async (chainId: any) => {
      const signer = new ethers.providers.Web3Provider(provider).getSigner();
      // eslint-disable-next-line no-underscore-dangle
      const _chainId = await signer.getChainId();

      if (!supportedChainsID.includes(_chainId)) return resetAll();

      dispatch(changeChainId(_chainId));
    });
  };

  return {
    subscribeProvider,
    resetAll,
  };
}

export default useWeb3SubscribeProvider;
