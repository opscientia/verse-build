/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-self-assign */
// @ts-nocheck
import { NETWORK } from 'config';

import { supportedChains } from './chains';

export function getChainData(chainId) {
  const chainData = supportedChains.find((chain) => chain.chain_id === chainId);

  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }

  const API_KEY = process.env.NEXT_PUBLIC_PROJECT_ID;

  if (chainData.rpc_url.includes('infura.io') && chainData.rpc_url.includes('%API_KEY%') && API_KEY) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }

  return chainData;
}

export function switchNetwork(provider) {
  const { chain_id: chainId, rpc_url: rpcUrl, } = getChainData(NETWORK.ID);

  provider.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: `0x${chainId.toString(16)}`,
        rpcUrls: [rpcUrl],
      }
    ],
  });
}

export const conciseAddress = (address, startSlice = 6, endSlice = 3) =>
  `${address?.slice(0, startSlice)}...${address?.slice(address?.length - endSlice, address?.length)}`;

export const truncateAddress = (address) => {
  if (!address) return 'No Account';

  const match = address.match(/^(0x[\dA-Za-z]{2})[\dA-Za-z]+([\dA-Za-z]{2})$/);

  if (!match) return address;

  return `${match[1]}…${match[2]}`;
};

export const shorter = (str) => (str?.length > 8 ? `${str.slice(0, 6)}...${str.slice(-4)}` : str);

export const toHex = (num) => {
  const val = Number(num);

  return `0x${val.toString(16)}`;
};

export function addZeroes(num) {
  // Cast as number
  num = Number(num);

  // If not a number, return 0
  if (Number.isNaN(num)) {
    return 0;
  }

  // If there is no decimal, or the decimal is less than 2 digits, toFixed
  if (String(num).split('.').length < 5 || String(num).split('.')[1].length <= 5) {
    num = num.toFixed(5);
  }

  // Return the number
  return num;
}

export const bigNumberToStr = (str) => Math.round(Number.parseFloat(str) * 10 ** 18);

export const bigNumberToStr2 = (str) => (str / 10 ** 18).toFixed(3);

export const titleCase = (str) => str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());

export const mileSecondToDays = (ms) => {
  // const daysms = ms % (24*60*60*1000);
  // const hours = Math.floor(daysms / (60*60*1000));
  // const hoursms = ms % (60*60*1000);
  // const minutes = Math.floor(hoursms / (60*1000));
  // const minutesms = ms % (60*1000);
  // const sec = Math.floor(minutesms / 1000);
  // return days + ":" + hours + ":" + minutes + ":" + sec;
  return Math.floor(ms / (24 * 60 * 60 * 1000));
};
