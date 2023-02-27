import React from 'react';

import { Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import TwoButton from '@/components/TwoButton';

import Layout from './../layout/index';
import GradientText from '@/components/GradientText';

export default function PreviewSection() {
  const router = useRouter();

  return (
    <div>
      <Box>
        <Box
          sx={{
            background: { sm: 'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B' },
            height: '100vh',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              background: { sm: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)' },
              border: { sm: '1px solid rgba(253, 160, 255, 0.1)' },
              maxWidth: 382,
              width: '100%',
              p: '24px',
              borderRadius: '12px',
              maxHeight: '85vh',
              overflowY: 'auto',
              color: '#fff',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                overflow: 'hidden',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  mt: 1,
                  fontWeight: 600,
                }}
              >
                Looking Good, Shady!
              </Typography>
            </Box>
            <Box component={"img"} src="/assets/images/Ellipse 31.png" sx={{
              ml: 8,
              p: 4,
            }} />
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '20px',
                }}
              >
                Shady El Damaty
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  'button': {
                    borderRadius: '32px',
                  }
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    background: 'rgba(253, 160, 255, 0.2)',
                    border: '2px solid #cb79cd'
                  }}
                >
                  <GradientText title='Neuroscience' />

                </Button>

                <Button
                  variant='contained'
                  sx={{
                    background: 'rgba(172, 220, 174, 0.2)',
                    color: '#ACDCAE',
                    border: '2px solid #ACDCAE'
                  }}
                >
                  DAO Scientist
                </Button>
              </Box>

              <Box
                sx={{
                  mt: 3,
                }}
              >
                <Typography>President of OpSci DAO</Typography>

                <Typography
                  sx={{
                    pt: 1,
                    fontSize: '14px',
                    color: '#AEAEAE',
                  }}
                >
                  Neuroscientist with expertise in MR pulse sequence development and ML/AI for neural signal processing.
                  Shady is the founder of OpSci, a non-profit developing tooling for web-native open science practice
                  and the co-founder of Holonym, a zero-knowledge identity protocol for producing private proofs of
                  verified credentials.
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  height: 25,
                  '& img': {
                    height: 25,
                    width: 25,
                  },
                }}
              >
                <Box
                  component='img'
                  src='/assets/images/id.png'
                />

                <Box
                  component='img'
                  src='/assets/svg/github.svg'
                />

                <Box
                  component='img'
                  src='/assets/svg/discord.svg'
                />

                <Box
                  component='img'
                  src='/assets/svg/twitter.svg'
                />

              </Box>
            </Box>

            <TwoButton
              title1='Edit profile'
              title2='Next'
              sx={{
                mt: 6,
              }}
              onClick2={() => router.push('/browseList')}
              onClick={() => router.push('/selectProfile')}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
