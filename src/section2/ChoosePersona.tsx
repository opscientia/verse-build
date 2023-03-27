import React, { useState } from 'react';

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

import PageGradient from '@/components/PageGradient';

const Profile = [
  {
    id: 1,
    img: '/assets/images/public.png',
    title: 'Public',
    desc: 'Claim a public on-chain record for your identity',
  },
  {
    id: 2,
    img: '/assets/images/private.png',
    title: 'Private',
    desc: 'Prove your identity privately with holonym',
  }
];
const ChoosePersona = () => {
  const router = useRouter();

  const [profileType, setProfileType] = useState('Public');

  const handleStates = () => {};

  return (
    <PageGradient>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Choose your persona
          </Typography>

          <Box
            sx={{
              marginTop: '24px',
            }}
          >
            {Profile.map((items, idx) => {
              return (
                <Box
                  key={items.id}
                  onClick={() => setProfileType(items?.title)}
                  sx={{
                    fontSize: '18px',
                    backgroundColor: '#393B50',
                    borderRadius: '8px',
                    mt: '16px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    px: 2,
                    height: 120,
                    border: profileType === items?.title ? '2px solid #782DC7' : '',
                    '&:hover': {
                      border: '2px solid #782DC7',
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '7px',
                        '& img': {
                          width: '18px',
                          height: '18px',
                        },
                      }}
                    >
                      <Box
                        component='img'
                        src={items.img}
                      />

                      <Typography>{items.title}</Typography>
                    </Box>

                    <Typography
                      sx={{
                        alignItems: 'center',
                        fontSize: 14,
                        maxWidth: '80%',
                        mx: 'auto',
                      }}
                    >
                      {items.desc}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={
            {
              // mt: 29,
            }
          }
        >
          <Button
            onClick={() => {
              if (profileType === 'Public') {
                router.push('/uploadPhoto');
              }

              if (profileType !== 'Public') {
                router.push('/uploadPhoto');
              }
            }}
            sx={{
              backgroundColor: ' #782DC7',
              color: 'white',
              padding: '12px 20px',
              width: '100%',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: ' #782DC7',
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </PageGradient>
  );
};

export default ChoosePersona;
