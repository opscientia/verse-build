// 'use client';

// import { Box } from '@mui/material';

// import Footer from '../layout/Footer';
// import Layout from '../layout/index';
// import DeveloperSection from '../section/DeveloperSection';
// import ExploreSection from '../section/ExploreSection';
// import FullyDecentralized from '../section/FullyDecentralized';
// import NewsLetter from '../section/NewsLetter';
// import VerseWork from '../section/VerseWork';

// export default function Home() {
//   return (
//     <Box
//       sx={{
//         // background: {
//         //   xs: 'url(/assets/images/PhoneBg.png)',
//         //   sm: '',
//         // },
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Layout />

//       <ExploreSection />

//       <VerseWork />

//       <FullyDecentralized />

//       <DeveloperSection />

//       <NewsLetter />

//       <Footer />
//     </Box>
//   );
// }


import React from 'react';

import { Box } from '@mui/material';

import Navbar from '@/layout/Navbar';
// import Desktop from '@/section2/Desktop';
import dynamic from 'next/dynamic';

const Desktop = dynamic(() => import('@/section2/Desktop'));


export default function HomePage2() {
  return (
    <Box>
      <Navbar />

      <Desktop />
    </Box>
  );
}
