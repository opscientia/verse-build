import React from 'react';

import { Box } from '@mui/material';

import ProfileNavbar from '@/layout/ProfileNavbar';
import UserProfileSection from '@/section/UserProfileSection';

export default function userProfile() {
  return (
    <Box
      sx={{
        background: 'url(/assets/svg/profileBg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
      }}
    >
      <ProfileNavbar />

      <UserProfileSection />
    </Box>
  );
}
