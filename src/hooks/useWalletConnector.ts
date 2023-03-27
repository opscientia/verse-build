/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useCallback } from 'react';

import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
// import { useAccount, useProvider, useSigner } from 'wagmi';
import { useAccount, useProvider, useSigner } from 'wagmi';

import { ContractAbi, contractDetails } from '@/contract';
import { changeAccount, changeChainId, changeContract, changeProvider, changeSigner } from '@/redux/slice/web3';

import { useSelectWeb3 } from './useSelectWeb3';
import useWeb3SubscribeProvider from './web3SubscribeProvider';

const useWalletConnector = () => {
  const dispatch = useDispatch();
  const { chainId, } = useSelectWeb3();
  const { subscribeProvider, resetAll, } = useWeb3SubscribeProvider();

  const { connector, address: account, ...rest } = useAccount();
  const { data: signer, isError, isLoading, } = useSigner();
  const provider = useProvider();

  const onConnect = useCallback(async () => {
    try {
      if (account && signer) {
        const chainId = await signer.getChainId();

        console.log({
          chainId,
        });

        // instantiate contract instance and assign to component ref variable
        const APP_CONTRACT = new ethers.Contract(contractDetails.contractAddress, ContractAbi, signer);

        dispatch(changeChainId(chainId));
        dispatch(changeAccount(account));
        dispatch(changeProvider(provider));
        dispatch(changeSigner(signer));

        dispatch(
          changeContract({
            APP_CONTRACT,
          })
        );
        // switchNetwork(provider);
      } else {
        // notify('error', 'network is not connected');
        console.log('network is not connected');
      }
    } catch (error) {
      // notify('error', error?.message);
      console.log(error);
    }
  }, [account, dispatch, provider, signer]);

  const onDisconnect = async () => {
    connector.onDisconnect();

    resetAll();
  };

  return {
    onConnect,
    onDisconnect,
  };
};

export default useWalletConnector;
