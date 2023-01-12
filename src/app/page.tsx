'use client';

import { Box } from '@mui/material';

import Footer from '../layout/Footer';
import Layout from '../layout/index';
import DeveloperSection from '../seaction/DeveloperSection';
import ExploreSection from '../seaction/ExploreSection';
import FullyDecentralized from '../seaction/FullyDecentralized';
import NewsLetter from '../seaction/NewsLetter';
import VerseWork from '../seaction/VerseWork';

export default function Home() {
  return (
    <Box>
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
