/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable comma-dangle */
import React from 'react';

import { Box, Container, Typography, Button } from '@mui/material';
import { colorGradients } from '@/components/Style';

const EXPLORE_ARRAY_DATA = [
  {
    id: 1,
    img: '/assets/svg/ops.svg',
    title: 'OpSci Society',
    desc: 'A Decentralized Open Science Society Linking Verifiable Impact with Reproducible Research',
  },
  {
    id: 2,
    title: 'LabDAO',
    desc: 'Short description',
  },
  {
    id: 3,
    title: 'Smart Contract Research Forum',
    desc: 'Short description',
  },
  {
    id: 4,
    title: 'Web3 Women in Science',
    desc: 'Short description',
  },
  {
    id: 5,
    title: 'Active Inference DAO',
    desc: 'Short description',
  },
  {
    id: 6,
    title: 'DeSci World',
    desc: 'Short description',
  },
];

export default function ExploreSection() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        px:1.5,
      }}
    >
      <Box
        sx={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(253, 160, 255, 0.2) 0%, rgba(7, 10, 27, 0) 85.94%)',
          minHeight: 400,
          maxWidth: 1300,
          mx: 'auto',
        }}
      ></Box>

      <Container
        maxWidth='lg'
        sx={{
          mt: -34,
          // border: '1px solid rgba(253, 160, 255, 0.15)',
          borderRadius: '32px 32px 0px 0px',
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #070A1B 88.54%), rgba(46, 47, 73, 0.5)',
          textAlign: 'center',
          p: {xs:3,sm:5},
          minHeight: {
            md: 789,
          },
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 600,
          }}
        >
          Explore Decentralized Science Societies
        </Typography>

        <Box
          sx={{
            mt: 6,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            justifyContent: 'center',
            alignItems: 'start',
            gap: 2,
          }}
        >
          {EXPLORE_ARRAY_DATA.map((item, idx) => (
            <Box
              key={`EXPLORE_ARRAY_DATA__${item.id}__${idx}`}
              sx={{
                background: '#24263E',
                p: 3,
                borderRadius: 4,
                mt: {
                  md: idx === 5 ? -13.5 : 0,
                },
                height: {
                  xs: '100%',
                  md: 'auto',
                },
                display: {
                  xs: idx > 1 ? 'none' : 'block',
                  sm: 'block',
                },
              }}
            >
              <Box
                component='img'
                src={item.img}
              />

              <Typography
                variant='h5'
                sx={{
                  fontWeight: 600,
                  mt: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#E4D7E9',
                  mt: 1,
                  maxWidth: 193,
                  mx: 'auto',
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}

          <Box
            sx={{
              background: '#24263E',
              p: 3,
              borderRadius: 4,
              mt: {
                md: -9.5,
              },
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <Box
              component='img'
              src='/assets/svg/comingSoon.svg'
            />
          </Box>
        </Box>

        <Button
          variant='contained'
          sx={{
            // @ts-ignore
            background: colorGradients.mainGradient,
            color: '#1B1D32',
            borderRadius: 2,
            fontWeight: 600,
            mt: 8,
            px: 4,
            height: 48,
            '&:hover': {
              // @ts-ignore
              background: colorGradients.hoverGradient,
            },
          }}
        >
          List your Community
        </Button>
      </Container>
    </Box>
  );
}
