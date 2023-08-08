import React from 'react';

import { Box } from '@mui/material';

import SignInFarm from '@/components/SignInFarm';
import { signer } from '@/helpers/contractConstants';

export default function signIn() {

  return (
    <Box>
      <SignInFarm />
    </Box>
  );
}
