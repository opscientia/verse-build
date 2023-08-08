/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable sonarjs/no-duplicated-branches */
// @ts-nocheck

import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';

// import { ContractAbi, contractDetails } from '';
import uploadFileToIpfs, { multerParse } from '@/file-upload';
import runMiddleware from '@/middleware/runMiddleware';

import { uploadFile } from './uploadToIPFS';

const upload = multer({
  dest: 'uploads/',
});

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

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  // Set up Multer to parse the files
  const fileOne= await runMiddleware(req, res, multerParse.single('file'));

 const file = await runMiddleware(req, res, uploadFileToIpfs);

 console.log({file, fileOne});

//  const { private, username, profilePic, kindOfScience, roleOfScience, status, about, DID, hypercertID } = req.body

//   const result = await prisma.profile.create({
//     data: {
//       private,
//       username,
//       profilePic,
//       kindOfScience,
//       roleOfScience,
//       status,
//       about,
//       DID,
//       hypercertID
//     },
//   })

  // res.status(200).json({
  //   message: 'fill uploaded successfully',
  //   data: recipient,
  // });
}
