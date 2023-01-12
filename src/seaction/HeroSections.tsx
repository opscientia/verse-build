/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from 'react';

import { SearchRounded } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import Link from 'next/link';

import GradientButton from '../components/GradientButton';
import GradientText from '../components/GradientText';
import SearchSection from './SearchSection';

const SEARCH_FILTER = [
  {
    title: 'People',
    icon: '/assets/svg/people.svg',
  },
  {
    title: 'Societies',
    icon: '/assets/svg/societies.svg',
  },
  {
    title: 'Hypercerts',
    icon: '/assets/svg/hypercerts.svg',
  }
];

export default function HeroSections() {
  return (
    <Box
      sx={{
        // height: 1400,
        // background: 'url(/assets/svg/newHeaderBg.svg)',
        backgroundPosition: 'center',
        backgroundSize: '100% 102%',
        mt: 1,
        py: 8,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 662,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            px: 2,
            borderRadius: {
              xs: '12px',
              sm: '32px',
            },
            maxWidth: 'fit-content',
            mx: 'auto',
            background: 'rgba(65, 66, 96, 0.5)',
            '& p': {
              fontSize: {
                xs: 13,
                sm: 16,
              },
            },
          }}
        >
          <Typography>Create your DeSci identity in less</Typography>{' '}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography
              sx={{
                ml: {
                  sm: 0.2,
                },
              }}
            >
              {' '}
              than 5 minutes
            </Typography>

            <Box
              sx={{
                width: 5,
                height: 5,
                background: '#fff',
                borderRadius: 6,
              }}
            />{' '}

            <Link href='/'>
              <GradientText
                title='See Guide'
                gradient='linear-gradient(89.94deg, #FEC6C6 -29.79%, #FDA0FF 101.25%)'
              />
            </Link>{' '}

            <KeyboardArrowRightIcon
              sx={{
                color: '#FDA0FF',
                ml: -1,
              }}
            />
          </Box>
        </Box>

        <Typography
          variant='h1'
          sx={{
            fontWeight: 600,
            mt: {
              xs: 6,
              sm: 4.5,
            },
          }}
        >
          The DeSci Society Registry
        </Typography>

        <Typography
          variant='h5'
          sx={{
            fontWeight: 400,
            mt: 2,
            color: '#CEC5D1',
          }}
        >
          Browse the multiverse of decentralized societies, link credentials to
          prove your identity, and apply to join a community
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            my: {
              xs: 4,
              sm: 5,
            },
          }}
        >
          <Button
            variant='contained'
            sx={{
              background: (theme) => theme.palette.primary.mainGradient,
              color: '#1B1D32',
              borderRadius: 2,
              fontWeight: 600,

              justifySelf: {
                xs: 'center',
                sm: 'right',
              },
              px: 3,
              width: 'max-content',
              height: 48,
              '&:hover': {
                background: (theme) => theme.palette.primary.hoverGradient,
              },
            }}
          >
            Create your identity
          </Button>

          <GradientButton
            title='Browse societies'
            boxSx={{
              height: 40,
              width: '100%',
            }}
            sx={{
              px: 3,
              // mt: {
              //   xs: 4,
              //   sm: -0.45,
              // },
              mx: {
                xs: 'auto',
                sm: 0,
              },

              height: 44,
            }}
          />
        </Box>
      </Container>

      <Box
        sx={{
          mt: {
            xs: 8,
            sm: 14,
            lg: 22,
            xl: 35,
          },
          maxWidth: 700,
          textAlign: 'center',
          mx: 'auto',
          px: 3,
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 600,
            lineHeight: '40px',
          }}
        >
          Discover Community, Become a Member, Publish, and Fund your Science
        </Typography>
      </Box>

      <SearchSection />
    </Box>
  );
}
