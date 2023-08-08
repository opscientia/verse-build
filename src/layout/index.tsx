import React from 'react';

import { Box } from '@mui/material';

import useResponsive from '../hooks/useResponsive';
import HeroSections from '../section/HeroSections';
import Navbar from './Navbar';

export default function Layout({ children, }: any) {
  const isMobile = useResponsive('down', 'sm');

  return (
    <Box
      sx={{
        background:
          'url(/assets/svg/newHeaderBg.svg), url(/assets/images/verse.png)',
        // {xs:'url(/assets/svg/mHeroBg.svg), url(/assets/images/verse.png)', sm:'url(/assets/svg/newHeaderBg.svg), url(/assets/images/verse.png)'},
        ...(isMobile &&{
          background:'url(/assets/svg/heroMBg.svg), url(/assets/images/verse.png)'
        }),
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
