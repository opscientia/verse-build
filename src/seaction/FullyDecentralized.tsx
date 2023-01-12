/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Box, Button, Container, Typography } from '@mui/material';

import GradientButton from '../components/GradientButton';

const LIST_ITEMS = [
  'Linked Web Account',
  'Zero Knowledge Proofs on Identity',
  'Sybil Resistance for Bot Prevention',
  'Private Verified Credentials',
  'Cross-chain interoperability',
  'Simple Developer Integrations'
];

export default function FullyDecentralized() {
  return (
    <Box
      sx={{
        background: 'url(/assets/images/div.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        px: '12px',
      }}
    >
      <Box
        sx={{
          maxWidth: 'sm',
          mx: 'auto',
          textAlign: 'center',
          //   background:
          //     'radial-gradient(50% 50% at 50% 50%, rgba(253, 160, 255, 0.25) 0%, rgba(7, 10, 27, 0) 85.94%',
        }}
      >
        <Typography
          variant='h2'
          sx={{
            pt: 24,
            // mt: 10,
          }}
        >
          Fully Decentralized,
          <br /> Private, and Anonymous
        </Typography>

        <Typography
          variant='h5'
          sx={{
            color: '#C0B9B9',
            mt: {
              xs: 0.5,
              sm: 4,
            },
          }}
        >
          What will you do with Turing-complete identity on-chain?
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
            gap: 4,
            justifyContent: 'center',
            my: 5,
          }}
        >
          <Button
            variant='contained'
            sx={{
              // @ts-ignore
              background: (theme) => theme.palette.primary.mainGradient,
              color: '#1B1D32',
              borderRadius: 2,
              fontWeight: 600,
              px: '30px',
              mx: {
                xs: 'auto',
                sm: 0,
              },
              justifySelf: {
                sm: 'right',
              },

              maxWidth: {
                xs: 228,
                sm: 'auto',
              },
              height: 48,
              '&:hover': {
                // @ts-ignore
                background: (theme) => theme.palette.primary.hoverGradient,
              },
            }}
          >
            Get started with Holo
          </Button>

          <GradientButton
            title='Learn more'
            boxSx={{
              height: 'fit-content',
              textAlign: 'left',
              mt: 0.3,
            }}
            sx={{
              // @ts-ignore
              width: {
                xs: 220,
                sm: 'max-content',
              },
              px: '30px',
              mx: {
                xs: 'auto',
                sm: 0,
              },
              height: 44,
            }}
          />
        </Box>

        <Box
          sx={{
            mt: 20,
          }}
        ></Box>
      </Box>

      <Container
        maxWidth='lg'
        sx={{
          background: {
            xs: 'linear-gradient(110.71deg, rgba(7, 10, 27, 0.15) 0%, rgba(178, 44, 181, 0.15) 100%), rgba(46, 47, 73, 0.25)',
            // sm: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #070A1B 88.54%), rgba(46, 47, 73, 0.5)',
            sm: 'linear-gradient(110.71deg, rgba(7, 10, 27, 0.15) 0%, rgba(178, 44, 181, 0.15) 100%), rgba(46, 47, 73, 0.25)',
          },
          borderRadius: '32px',
          border: '1px solid rgba(253, 160, 255, 0.15)',
          pt: 6,
          pb: 10,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            },
            gap:2,
            px: {
              sm: 6,
            },
          }}
        >
          <Box
            sx={{
              background:
                ' linear-gradient(180deg, #7D718D 0%, rgba(7, 10, 27, 0) 100%)',
              borderRadius: '32px 32px 0 0',
              display: {
                xs: 'flex',
                sm: 'none',
              },
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 480,
              width: '100%',
              minHeight: 316,
              mb: {
                xs: 6,
                md: 0,
              },
            }}
          >
            <Box
              component='img'
              src='/assets/svg/placeHolderIcon.svg'
              sx={
                {
                  // width:'100%'
                }
              }
            />
          </Box>

          <Box>
            <Typography variant='h3'>Holonym</Typography>

            <Typography
              sx={{
                mt: 2,
                color: '#CEC5D1',
                fontSize: 18,
                mb: 4,
              }}
            >
              Holonym isn't just for DeSci dApps! Holos are portable, universal,
              and compatible with any smart contract or web service integration.
              Your imagination is the only limit.
            </Typography>

            {LIST_ITEMS.map((item) => (
              <Box
                key={item}
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: 2,
                  my: 1,
                }}
              >
                <Box
                  component='img'
                  src='/assets/svg/colorDot.svg'
                />

                <Typography
                  sx={{
                    fontSize: 18,
                    color: '#CEC5D1',
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              background:
                ' linear-gradient(180deg, #7D718D 0%, rgba(7, 10, 27, 0) 100%)',
              borderRadius: '32px 32px 0 0',
              display: {
                xs: 'none',
                sm: 'flex',
              },
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 480,
              width: '100%',
              minHeight: 316,
              mt: {
                xs: 4,
                md: 0,
              },
            }}
          >
            <Box
              component='img'
              src='/assets/svg/placeHolderIcon.svg'
              sx={
                {
                  // width:'100%'
                }
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
