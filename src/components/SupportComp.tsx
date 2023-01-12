/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';

import { Box, Button, Container, Typography } from '@mui/material';

import GradientButton from './GradientButton';

const EXPLORE_CARD_DETAILS = [
  {
    id: 1,
    title: 'Professional Societies',
    desc: 'Find your niche, establish your reputation, and list your work for public funding.',
    img: '/assets/svg/check.svg',
  },
  {
    id: 2,
    title: 'DeSci Reputation',
    desc: 'Import your academic credentials, track your impact, and aggregate your activity for a portable reputation.',
    img: '/assets/images/icon2.png',
  },
  {
    id: 3,
    title: 'Integrated Web Services',
    desc: 'Bridge your research activity between smart contracts and common academic web services.',
    img: '/assets/images/icon3.png',
  },
  {
    id: 4,
    title: 'Hypercerts for Funding',
    desc: 'Transform your demonstrated impact across your communities into funding streams.',
    img: '/assets/images/icon4.png',
  },
];

export default function SupportComp() {
  return (
    <Box
      sx={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(253, 160, 255, 0.25) 0%, rgba(7, 10, 27, 0) 85.94%)',
        backgroundPosition: 'center',
        px: '12px',
      }}
    >
      <Container
        maxWidth='md'
        sx={{
          background:
            'linear-gradient(110.71deg, rgba(7, 10, 27, 0.15) 0%, rgba(178, 44, 181, 0.15) 100%), rgba(46, 47, 73, 0.25)',
          borderRadius: '32px',
          border: '1px solid rgba(253, 160, 255, 0.15)',
          py: 6,
          // mt:-20,
          textAlign: 'left',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            },
            px: {
              xs: 1,
              sm: 3,
            },
            gap: 4.6,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <Box
              component='img'
              src='/assets/images/ImageP.png'
              sx={{
                width: '100%',
                maxWidth: 460,
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h3'
              sx={{
                lineHeight: '48px',
              }}
            >
              Support the project
            </Typography>

            {/* {EXPLORE_CARD_DETAILS.map((item, idx) => ( */}

            <Typography
              sx={{
                color: '#E4D7E9',
                fontSize: 15,
                mt: 2,
                flexGrow: 1,
              }}
            >
              Claim an Early Access Badge to support the development of this
              project. Accounts holding this badge will unlock new features and
              perks before they become available for everyone else, such as
              custom flairs, hypercerts for funding, and impact metrics. Early
              Access Badge holders will obtain early governance rights on Verse,
              helping to decide the direction of the project.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: 2,
                justifyContent: 'center',
                mb: 1,
                mt:4
              }}
            >
              <Button
                variant='contained'
                sx={{
                  background: (theme) => theme.palette.primary.mainGradient,
                  color: '#2d1b40',
                  borderRadius: 2,
                  fontWeight: 600,
                  height: 48,
                  '&:hover': {
                    background: (theme) => theme.palette.primary.hoverGradient,
                  },
                }}
              >
                Support
              </Button>

              <GradientButton
                title='Read more'
                boxSx={{
                  width: 'max-content',
                  height: 'fit-content',
                  borderRadius: 2,
                }}
                sx={{
                  px: 5,
                  height: 44,
                  borderRadius: 2,
                  background: '#321f44',
                }}
              />
            </Box>

            {/* ))} */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
