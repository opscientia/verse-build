/* eslint-disable @typescript-eslint/ban-ts-comment */
{
  /* porgressBar.svg */
}

import React from 'react';

import { Box, Button, Divider, Typography, IconButton } from '@mui/material';
import Image from 'next/image';

// import ImageButton from './ImageButton';
import { useRouter } from 'next/router';

import GradientButton from '@/components/GradientButton';
import TwoButton from '@/components/TwoButton';

import Layout from '../layout/index';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        background: 'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
        height: '100vh',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          background: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
          border: '1px solid rgba(253, 160, 255, 0.1)',
          maxWidth: 382,
          width: '100%',
          p: '24px',
          borderRadius: '12px',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              mt: 1,
              fontWeight: 600,
            }}
          >
            Profile Image
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Box
              sx={{
                height: '128px',
                width: '128px',
                background: '#393B50',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                border: '1px solid #2C2830',
              }}
            >
              <Image
                src='/assets/svg/personIcon.svg'
                width={128}
                height={128}
                alt='Profile Image'
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  ml: -4,
                }}
              >
                <IconButton
                  sx={{
                    background: 'linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',
                  }}
                >
                  <Image
                    src='/assets/svg/arrowUp.svg'
                    width={16}
                    height={16}
                    alt='Profile Image'
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              mt: 1,
            }}
          >
            <Box
              component='img'
              src='/assets/svg/divider.svg'
              alt='Profile Image'
            />
          </Box>

          <Typography
            sx={{
              fontSize: 18,
              color: '#FDF5FF',
              mt: 2,
            }}
          >
            Select an avatar
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1.5,
              mt: 2,
            }}
          >
            {[...Array(12)].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  height: '72px',
                  width: '72px',
                  background: '#393B50',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #2C2830',
                }}
              >
                <Image
                  src='/assets/svg/emojo.svg'
                  width={32}
                  height={32}
                  alt='Profile Image'
                />
              </Box>
            ))}
          </Box>

          {/* <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1.5,
              mt: 4,
            }}
          >
            <GradientButton
              title='Skip'
              gradient='linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)'
              boxSx={{
                // border:'red'
              }}
              sx={{
                // @ts-ignore
                width: '100%',
                height: '100%',
                background: '#1e191f12 !important',
import { useRouter } from 'next/router';

              }}
            />

            <Button
              fullWidth
              variant='contained'
              sx={{
                background: 'linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',
                color: '#000',
                borderRadius: '12px',
                py: '12px',
                fontSize: '16px',
              }}
            >
              Next
            </Button>
          </Box> */}

          <TwoButton
            title1='Skip'
            title2='Next'
            onClick2={()=>router.push('/about')}
          />
        </Box>
      </Box>
    </Box>
  );
}
