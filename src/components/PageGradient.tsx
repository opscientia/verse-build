import React from 'react';

import { Box } from '@mui/material';

export default function PageGradient({ children, }: any) {
  return (
    <Box
      sx={{
        background: {
          sm: 'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
        },
        height: '100vh',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          background: {
            sm: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
          },
          border: {
            sm: '1px solid rgba(253, 160, 255, 0.1)',
          },
          maxWidth: 382,
          width: '100%',
          p: '24px',
          borderRadius: '12px',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
