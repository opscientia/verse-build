import { ethers } from 'ethers';

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || '';
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || '';
export const walletAddress = '0x40426F16818A5b8ce1e4a2ad58279cF309f356cc';

// if (!ALCHEMY_API_KEY) throw new Error('No ALCHEMY_API_KEY is provided')

if (!WALLET_PRIVATE_KEY) throw new Error('No WALLET_PRIVATE_KEY is provided');

export const provider = new ethers.providers.AlchemyProvider('mainnet', ALCHEMY_API_KEY);

export const signer = new ethers.Wallet(WALLET_PRIVATE_KEY, provider);

console.log({
  signer,
});
