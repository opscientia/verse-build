/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from 'react';

import { Box, Button, Divider, Typography } from '@mui/material';

const NewMessages = [
  {
    id: 1,
    img: '/assets/images/Academic.png',
    title: 'Academic',
  },
  {
    id: 2,
    img: '/assets/images/Researchers.png',
    title: 'Researchers',
  },
  {
    id: 3,
    img: '/assets/images/organizations.png',
    title: 'Organizations',
  },
  {
    id: 4,
    img: '/assets/images/service.png',
    title: 'Service Providers',
  }
];
export default function Desktop() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
        height: '100vh',
        width: '100%',

        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1440,
          px: '128px',
          margin: 'auto',
          justifyContent: 'space-around',
          position: 'relative',
          zIndex: 9,
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '70px',
              fontWeight: 700,
              color: 'white',
              mt: '150px',
            }}
          >
            <span>The Desci</span>

            <span>Society Registry</span>

            <Typography
              sx={{
                mt: 3,
                color: '#999999',
                fontSize: '18px',
                width: '556px',
              }}
            >
              Browse the multiverse of decentralized societies, link credentials to prove your identity, and apply to
              join a community
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              mt: 3,
            }}
          >
            <Button
              sx={{
                background: ' linear-gradient(180deg, #8E49E4 0%, rgba(142, 73, 228, 0.5) 100%)',
                color: 'white',
                textTransform: 'none',
                px: 2,
                py: 1.5,
              }}
            >
              Create Identity
            </Button>

            <Button
              sx={{
                background: ' #2A274A',
                color: 'white',
                textTransform: 'none',
                px: 2,
                py: 1.5,
              }}
            >
              Browse Society
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '19px',
            color: 'white',
          }}
        >
          <Divider
            orientation='vertical'
            sx={{
              border: '1px solid gray',
              borderRadius: '100%',
              height: '140px',
            }}
          />

          <Box>
            <Typography>Built in Mind for :</Typography>

            <Box
              sx={{
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, max-content)',
                  // columnGap: 2,
                  // rowGap:1
                  gap: 1.8,
                }}
              >
                {NewMessages.map((item, idx) => {
                  return (
                    <Box
                      key={item.id}
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        ml: idx === 1 && -3,
                        alignItems: 'center',
                        background:
                          'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        width: 'max-content',
                        border: '0.1px solid #999999',
                      }}
                    >
                      <Box
                        component='img'
                        src={item.img}
                        alt={item.title}
                      />

                      <Box>{item.title}</Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component='img'
        src='/assets/images/backLine.png'
        sx={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
    </Box>
  );
}
