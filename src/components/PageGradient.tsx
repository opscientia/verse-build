import React from 'react';

import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const routerProgressBars: any = {
  ['/selectProfile']: '/assets/svg/progressBar1.svg',
  ['/uploadPhoto']: '/assets/svg/progressBar2.svg',
  ['/about']: '/assets/svg/progressBar3.svg',
  ['/accountlink']: '/assets/svg/progressBar4.svg',
  ['/preview']: '/assets/svg/progressBar5.svg',
};

export default function PageGradient({ children, sx }: any) {
  const router = useRouter();
  const path: string = router?.asPath;


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
      }}>
      <Box
        component='img'
        src={routerProgressBars?.[path]}
        sx={{
          mt: 0,
        }}
      />

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
        }}>
        {children}
      </Box>
    </Box>
  );
}
