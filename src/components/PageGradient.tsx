/* eslint-disable react-redux/useSelector-prefer-selectors */
import React, { useState, useEffect } from 'react';

import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import MProgressbar from '@/section/MProgressbar';

import StaticProgressBar from './StaticProgressBar';

const routerProgressBars: any = {
  selectProfile: 0,
  uploadPhoto: 10,
  about: 25,
  accountLink: 40,
  preview: 60,
  browseList: 70,
};


export default function PageGradient({ children, sx, }: any) {
  const router = useRouter();
  const path: string = router?.asPath;

    const activeTab = useSelector((state: any) => state.profileTabs.currentTab);

  const value = routerProgressBars?.[activeTab];
  const [progress, setProgress] = useState(value);

  useEffect(() => {
      setProgress((prevProgress: number) =>(prevProgress >= 100 ? 5 : prevProgress + 10));
  }, [value]);


  return (
    <Box
      sx={{
        background: {
          sm: 'linear-gradient(351.79deg, rgba(36, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
        },
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
      }}
    >
      {/* <Box
        component='img'
        src={routerProgressBars?.[path]}
        sx={{
          mt: 0,
        }}
      /> */}

      <StaticProgressBar  setProgress={setProgress} progress={progress} />

      <Box
        sx={{
          background: {
            sm: 'linear-gradient(156.94deg, #28243E 0%, #121222 100%)',
          },
          border: {
            sm: '1px solid rgba(253, 160, 255, 0.1)',
          },
          maxWidth: 382,
          width: '100%',
          p: '24px',
          borderRadius: '12px',
          maxHeight: '90vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 680,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
