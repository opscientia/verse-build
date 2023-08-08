/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import TwoButton from '@/components/TwoButton';

import GradientText from '../components/GradientText';

export default function DeveloperSection() {
  return (
    <div>

      <Container
        maxWidth='lg'
        sx={{
          mt: 30,
          pb: 10,
          px: '12px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(4, 1fr)',
              md: 'repeat(5, 1fr)',
            },
            columnGap: {
              xs: 2,
              md: 3,
            },
            rowGap: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Box
            sx={{
              background: 'rgba(46, 47, 73, 0.5)',
              borderRadius: 4,
              minHeight: 333,
              gridColumn: {
                xs: '1/2',
                md: '1/3',
              },

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(253, 160, 255, 0.15)',
            }}
          >
            <Box
              component='img'
              src='/assets/svg/placeHolderIcon.svg'
              sx={{
                width: {
                  xs: 24,
                  sm: 'auto',
                },
              }}
            />
          </Box>

          <Box
            sx={{
              background: 'rgba(46, 47, 73, 0.5)',
              borderRadius: 4,
              minHeight: 333,
              gridColumn: {
                xs: '2/5',
                md: '3/6',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(253, 160, 255, 0.15)',
            }}
          >
            <Box
              component='img'
              src='/assets/svg/placeHolderIcon.svg'
              sx={{
                width: {
                  xs: 24,
                  sm: 'auto',
                },
              }}
            />
          </Box>

          <Box
            sx={{
              background:
                'linear-gradient(110.71deg, rgba(7, 10, 27, 0.15) 0%, rgba(178, 44, 181, 0.15) 100%), rgba(46, 47, 73, 0.25)',
              borderRadius: 4,
              gridColumn: {
                xs: '1/5',
                md: '1/4',
              },
              p: {
                xs: 3.5,
                sm: 6,
              },
              border: '1px solid rgba(253, 160, 255, 0.15)',
            }}
          >
            <Typography variant='h4'>Are you an academic researcher, organization, or service provider?</Typography>

            <Typography
              sx={{
                fontSize: 15,
                color: '#CEC5D1',
                mt: 1,
              }}
            >
              We would love to hear from you. How would your organization implement a universal, decentralized
              identifier to improve the impact of research?
            </Typography>

            <Box
              sx={{
                mt: 3.4,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <GradientText title='Unlock an early access badge' />

              <Box
                component='img'
                src='/assets/svg/leftIcon.svg'
                sx={{
                  width: 12,
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              background:
                'linear-gradient(110.71deg, rgba(7, 10, 27, 0.15) 0%, rgba(178, 44, 181, 0.15) 100%), rgba(46, 47, 73, 0.25)',
              borderRadius: 4,
              gridColumn: {
                xs: '1/5',
                md: '4/6',
              },
              p: {
                xs: 3.5,
                sm: 6,
              },
            }}
          >
            <Typography variant='h4'>Are you developer?</Typography>

            <Typography
              sx={{
                fontSize: 15,
                color: '#CEC5D1',
                mt: 1,
              }}
            >
              Add two lines of code to your smart contract to integrate verification with Holo in your dApp.
            </Typography>

            <Box
              sx={{
                mt: 7,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <GradientText title='Get in touch' />

              <Box
                component='img'
                src='/assets/svg/leftIcon.svg'
                sx={{
                  width: 12,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
