import { ethers } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

// import { ContractAbi, contractDetails } from '';
import { ContractAbi, contractDetails } from '@/contract';
import { signer, walletAddress } from '@/helpers/contractConstants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handlePOST(req, res);

    case 'PUT':
      return res.status(405).end();

    case 'DELETE':
      return res.status(405).end();

    case 'OPTIONS':
      return res.status(200).send('ok');

    default:
      return res.status(405).end();
  }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const contractInstance = new ethers.Contract(contractDetails.contractAddress, ContractAbi, signer);

  const tx = await contractInstance?.CredentialsToAddressTwitter(req.body.address);

  const recipient = await tx.wait();

  res.status(200).json({
    message: 'wallet connect with twitter',
    data: recipient,
  });
}
