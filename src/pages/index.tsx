'use client';

import { Box } from '@mui/material';

import Footer from '../layout/Footer';
import Layout from '../layout/index';
import DeveloperSection from '../section/DeveloperSection';
import ExploreSection from '../section/ExploreSection';
import FullyDecentralized from '../section/FullyDecentralized';
import NewsLetter from '../section/NewsLetter';
import VerseWork from '../section/VerseWork';

export default function Home() {
  return (
    <Box
      sx={{
        // background: {
        //   xs: 'url(/assets/images/PhoneBg.png)',
        //   sm: '',
        // },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Layout />

      <ExploreSection />

      <VerseWork />

      <FullyDecentralized />

      <DeveloperSection />

      <NewsLetter />

      <Footer />
    </Box>
  );
}
