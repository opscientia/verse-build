/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import path from 'path';

import { ethers } from 'ethers';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import { NFTStorage, File } from 'nft.storage';
import sanitize from 'sanitize-filename';

import { ContractAbi, contractDetails } from '@/contract';
import { signer, walletAddress } from '@/helpers/contractConstants';

const nftStorage = new NFTStorage({
  token: process.env.NFT_STORAGE_TOKEN,
  gateway: 'https://ipfs.infura.io/ipfs/',
  apiUrl: 'https://api.nft.storage/',
});

// ----------------------------------
export const fileName = (filename: string) => {
  const sanitizedName = sanitize(filename);

  return new Date().toISOString().replace(/:/g, '-') + '-' + sanitizedName;
};
// ----------------------------------
export const multerParse = multer({
  // SET DEFAULT FILE SIZE UPLOAD LIMIT
  limits: {
    fileSize: 1024 * 1024 * 100 * 10,
  }, // 1000MB
  // FILTER OPTIONS LIKE VALIDATING FILE EXTENSION
  fileFilter: function (req: any, file: any, cb: any) {
    const filetypes = /jpeg|jpg|png|pdf|gif|/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      return cb(new Error('PDF, PNG, JPG, JPEG or GIF format allowed!'));
    }
  },
});

const uploadFileToIpfs = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  // Get the files from the request
  const nftLogo = req?.file;
  const { userName, } = req.body;

  const imageFile = new File([nftLogo.buffer], userName, {
    type: nftLogo.mimetype,
  });

  // Upload the image to IPFS
  const profile = {
    private: true,
    username: 'userName',
    'profile pic': 'imageFile',
    'Kind of Science': 'some test',
    'Role of Science': 'some test',
    Status: 'some test',
    About: 'some test',
    DID: '<eth addy>',
    hypercertID: '<hypercert addy>',
  };

  // const metadata = await nftStorage.store({
  //   name: 'Profile',
  //   description: 'Profile data',
  //   image: imageFile,
  //   properties: profile,
  // });

  // console.log('metadata ', metadata);
  // https://ipfs.io/ipfs/bafyreiavc4zunaokjpvnvlxw73ynct6zcthglqjr5kx4adjhgpkwpqj56e/metadata.json

  const blob = new Blob([JSON.stringify(profile)], {
    type: 'application/json',
  });
  const cid = await nftStorage.storeBlob(blob);
  console.log('cid ', cid);
  // https://ipfs.io/ipfs/bafkreifsuotsz47hgekwm2alqkdbttbhfeqcjnjwxmgsqepso5xkfwj7ha
  // // Get the IPFS hash for the image
  // const imageHash = result1.ipnft
  // const metadataHash = result1.url
  // const contractInstance = new ethers.Contract(
  //   contractDetails.contractAddress,
  //   ContractAbi,
  //   signer
  // );

  // console.log({
  //   contractInstance,
  // });

  // const tx = await contractInstance?.safeMint(walletAddress);

  // const recipient = await tx.wait();
  // {
  //   userName: 'hlelo',
  //   profileType: 'Public',
  //   scienceDo: 'Biology',
  //   aboutYou: '',
  //   yourRole: [ 'Post Doctoral', 'Experimentalist' ]
  // }

  // console.log({
  //   nftLogo,
  //   req,
  //   // userName,
  // });

  return next();
};

export default uploadFileToIpfs;
