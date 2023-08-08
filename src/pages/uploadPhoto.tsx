import React from 'react';

import { Box } from '@mui/material';

import UploadProfile from '@/section2/UploadProfile';

export default function UploadPhoto() {
  return (
    <Box>
      <UploadProfile
        userName=''
        setUserName={(name: string) => console.log()}
      />
    </Box>
  );
}
