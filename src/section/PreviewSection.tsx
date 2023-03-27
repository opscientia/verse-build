import React from 'react';

import { Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import GradientText from '@/components/GradientText';
import NewTwoButtons from '@/components/NewTwoButtons';
import PageGradient from '@/components/PageGradient';
import TwoButton from '@/components/TwoButton';

import Layout from './../layout/index';

export default function PreviewSection() {
  const router = useRouter();

  return (
    <PageGradient
      sx={{
        height: 'auto',
      }}
    >
      <Box>
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
            Looking Good, Vera!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 3,
            mb: 2,
          }}
        >
          <Box
            component='img'
            src='/assets/images/Ellipse 31.png'
            sx={
              {
                // ml: 8,
                // p: 4,
              }
            }
          />
        </Box>

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
            Vera Rubin
          </Typography>

          <Typography
            sx={{
              color: '#AEAEAE',
            }}
          >
            verarubin.id.desci.eth
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              button: {
                borderRadius: '32px',
              },
            }}
          >
            <Button
              variant='contained'
              sx={{
                background: 'rgba(253, 160, 255, 0.2)',
                border: '2px solid #cb79cd',
              }}
            >
              <GradientText title='Astronomy' />
            </Button>

            <Button
              variant='contained'
              sx={{
                background: 'rgba(172, 220, 174, 0.2)',
                color: '#ACDCAE',
                border: '2px solid #ACDCAE',
              }}
            >
              Legacy Scientist
            </Button>
          </Box>

          <Box
            sx={{
              mt: 3,
            }}
          >
            <Typography
              sx={{
                pt: 1,
                fontSize: 14,
                color: '#AEAEAE',
              }}
            >
              Neuroscientist with expertise in MR pulse sequence development and ML/AI for neural signal processing.
              Shady is the founder of OpSci, a non-profit developing tooling for web-native open science practice and
              the co-founder of Holonym, a zero-knowledge identity protocol for producing private proofs of verified
              credentials.
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 3,
              fontSize: 14,
              color: '#AEAEAE',
              mb: 1,
            }}
          >
            Public Persona
          </Typography>

          <Box
            sx={{
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

        {/* <TwoButton
          title1='Edit profile'
          title2='Next'
          sx={{
            mt: 4,
          }}
          onClick2={() => router.push('/browseList')}
          onClick={() => router.push('/selectProfile')}
        /> */}
        <NewTwoButtons
          title1='Edit Profile'
          title2='Next'
          onClick1={() => router.push('/selectProfile')}
          onClick2={() => router.push('/browseList')}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt:4,
            '& button': {
              width: '100%',
              gap:2
            },
          }}
        />
      </Box>
    </PageGradient>
  );
}
