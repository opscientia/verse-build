import React from 'react';

import { Box, Typography } from '@mui/material';

export default function ProfileCard() {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            color: 'white',
            justifyContent: 'space-between',
            mt: 4.6,
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
            }}
          >
            Hypercerts
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: '6.28px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: 'fit-content',
              padding: '6px 12px',
              borderRadius: '36px',
            }}
          >
            <Box
              component='img'
              src='/assets/settings.png'
              sx={{
                width: '13.44px',
                height: '15px,',
              }}
            />

            <Typography>Settings</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            background: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
            border: '1px solid rgba(253, 160, 255, 0.1)',
            width: '482px',
            p: '24px',
            borderRadius: '12px',
            maxHeight: '100vh',
            overflowY: 'auto',
            color: '#fff',
            mt: 2.1,
          }}
        >
          <Box
            sx={{
              mb: '200px',
              display: 'flex',
              gap: '16px',
            }}
          >
            <Box
              sx={{
                width: '50%',
                height: '280px',
                backgroundColor: '#32344F',
                borderRadius: '12px',
                mt: 5,
              }}
            ></Box>

            <Box
              sx={{
                width: '50%',
                height: '280px',
                backgroundColor: '#32344F',
                borderRadius: '12px',
                mt: 5,
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
