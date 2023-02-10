// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';

import { Menu } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import GradientText from '../components/GradientText';
import { colorGradients } from '@/components/Style';

export default function Navbar() {
  const router = useRouter();

  return (
    <Box>
      <Container
        maxWidth='lg'
        sx={{
          py: 2,
        }}
      >
        <Stack
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
            component='img'
            src='/assets/svg/logo.svg'
            alt='logo'
            sx={{
              width: 116,
            }}
          />

          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              justifyContent: 'space-between',
              maxWidth: 220,
              width: '100%',
              alignItems: 'center',
              '& p': {
                fontWeight: 600,
              },
              '& a': {
                fontWeight: 600,
              },
            }}
          >
            <Link href='/'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography>dApps </Typography>

                <KeyboardArrowDownIcon />
              </Box>
            </Link>

            <Link href='/'>Search</Link>

            <Link href='/'>Docs</Link>
          </Box>

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'grid',
              },
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() => router.push('/signIn')}
              sx={{
                background: 'transparent',
              }}
            >
              <GradientText
                title='Sign In'
                gradient='linear-gradient(89.94deg, #FEC6C6 -29.79%, #FDA0FF 101.25%)'
              />
            </Button>

            <Button
              sx={{
                background: colorGradients.mainGradient,
                color: (theme) => theme.palette.primary.dark,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: '10px',
                height: 32,
                px: 2,
                '&:hover': {
                  background: colorGradients.hoverGradient,
                },
              }}
            >
              Sign Up
            </Button>
          </Box>

          <IconButton
            sx={{
              color: '#fff',
              display: {
                xs: 'block',
                md: 'none',
              },
            }}
          >
            <Menu />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
