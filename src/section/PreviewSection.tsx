import { useEffect, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import GradientText from '@/components/GradientText';
import NewTwoButtons from '@/components/NewTwoButtons';
import PageGradient from '@/components/PageGradient';
import { selectCurrentTab } from '@/redux/slice/profileTab';

import MProgressbar from './MProgressbar';

interface IProps {
  handleSubmit: () => void;
}

export default function PreviewSection({ handleSubmit, }: IProps) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (progress === 100) {
      dispatch(selectCurrentTab('browseList'));
    }
  }, [progress]);

  return (
    <PageGradient
      sx={{
        height: 'auto',
      }}
    >
      {isLoading && progress !== 100 && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(7, 10, 27, 0.43)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10.5px)',
            WebkitBackdropFilter: 'blur(12.5px)',
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '360px',
              width: '100%',
              px: 2,
            }}
          >
            <MProgressbar
              setProgress={setProgress}
              progress={progress}
            />

            {/* <Box component='img' src='/assets/svg/progressbar.svg' /> */}

            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                mt: 2,
              }}
            >
              playing some scientist game..
            </Typography>
          </Box>
        </Box>
      )}

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
            mt: 1,
            mb: 1,
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
              mt: 1,
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
              mt: 1,
            }}
          >
            <Typography
              sx={{
                pt: 1,
                fontSize: 14,
                color: '#AEAEAE',
              }}
            >
              Neuroscientist with expertise in MR pulse sequence development and
              ML/AI for neural signal processing. Shady is the founder of OpSci,
              a non-profit developing tooling for web-native open science
              practice and the co-founder of Holonym, a zero-knowledge identity
              protocol for producing private proofs of verified credentials.
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 1,
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
          onClick1={() => dispatch(selectCurrentTab('selectProfile'))}
          onClick2={() => {
            if (!isLoading) {
              setIsLoading(true);
              handleSubmit();
              // setTimeout(() => {
              //   setIsLoading(false);
              // }, 5000);
            }
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 4,
            '& button': {
              width: '100%',
              gap: 2,
            },
          }}
        />
      </Box>
    </PageGradient>
  );
}
