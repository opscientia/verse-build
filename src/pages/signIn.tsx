import React from 'react';

import { Box } from '@mui/material';

import SignInFarm from '@/components/SignInFarm';
import { signer } from '@/helpers/contractContants';

export default function signIn() {

  return (
    <Box>
      <SignInFarm />
    </Box>
  );
}
