import React from 'react';

import { Box } from '@mui/material';

import HeroSections from '../seaction/HeroSections';
import Navbar from './Navbar';

export default function Layout({ children, }: any) {
  return (
    <Box
      sx={{
        background:
          'url(/assets/svg/newHeaderBg.svg), url(/assets/images/verse.png)',
        // {xs:'url(/assets/svg/mHeroBg.svg), url(/assets/images/verse.png)', sm:'url(/assets/svg/newHeaderBg.svg), url(/assets/images/verse.png)'},
        backgroundPosition: {
          xs: 'center',
          md: 'auto',
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />

      <HeroSections />
    </Box>
  );
}
