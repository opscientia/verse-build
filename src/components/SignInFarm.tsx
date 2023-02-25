import React from 'react';

import { Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';

import ImageButton from './ImageButton';
import { useRouter } from 'next/router';

export default function SignInFarm() {

  const router = useRouter();

  return (
    <Box
      sx={{
        background: {sm:'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B'},
        height: '100vh',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          background: {sm:' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)'},
          border: {sm:'1px solid rgba(253, 160, 255, 0.1)'},
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
          <Box
            component='img'
            src='/assets/images/verseLogo.png'
          />

          <Typography
            variant='h4'
            sx={{
              mt: 1,
              fontWeight: 600,
            }}
          >
            Welcome to Verse
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              color: '#CEC5D1',
              mt: 1,
            }}
          >
            Jump into the multiverse of <br /> decentralized science!
          </Typography>

          <Button
            fullWidth
            variant='contained'
            onClick={()=>{
              router.push('/profilePage')
            }}
            sx={{
              background: 'linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',
              color: '#000',
              borderRadius: '12px',
              py: '12px',
              fontSize: '16px',
              my: 4,
            }}
          >
            Connect Wallet
          </Button>

          <Divider
            sx={{
              background: 'linear-gradient(90deg, rgba(149, 124, 157, 0) 0%, #957C9D 100%)',
              backgroundSize: '100%',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#957C9D',
                fontSize: 12,
                mt: -1,
                background: 'linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
                width: 28,
              }}
            >
              OR
            </Typography>
          </Box>

          <Box>
            <ImageButton
              url='/assets/svg/googleIcon.svg'
              title='Continue with Google'
            />

            <ImageButton
              url='/assets/svg/orcid.svg'
              title='Continue with ORCiD'
            />

            <ImageButton
              url='/assets/svg/gitHubIcon.svg'
              title='Continue with Github'
            />

            <Typography
              sx={{
                fontSize: 12,
                color: '#957C9D',
                mt: 4,
              }}
            >
              By singing up, you agree to the{' '}

              <Typography
                component='span'
                sx={{
                  textDecoration: 'underline',
                  fontSize: 12,
                  color: '#957C9D',
                  mt: 4,
                }}
              >
                terms of services{' '}
              </Typography>{' '}

              <br />

              and{' '}

              <Typography
                component='span'
                sx={{
                  textDecoration: 'underline',
                  fontSize: 12,
                  color: '#957C9D',
                  mt: 4,
                }}
              >
                privacy policy
              </Typography>{' '}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
