import React from 'react';

import { Box, Button, Container, Typography } from '@mui/material';

import SupportComp from '../components/SupportComp';

const styles = {
  btn: {
    px: '30px',
    height: 48,
    fontWeight: 600,
    color: '#1B1D32',
    borderRadius: '16px',
    padding: '15px 30px 15px 30px',
    background: (theme: any) => theme.palette.primary.mainGradient,
    '&:hover': {
      background: (theme: any) => theme.palette.primary.hoverGradient,
    },
  },
};

function NewsLetter() {
  return (
    <Box
      sx={{
        // background: 'url(/assets/svg/footerBg.svg)',

        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        mt: 20,
      }}
    >
      <SupportComp />

      <Box
        sx={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(253, 160, 255, 0.25) 0%, rgba(7, 10, 27, 0) 85.94%), url(/assets/images/verse2.png)',
            backgroundPosition:'center',
            backgroundSize:'130%',
            // backgroundBlendMode:'color',
            backgroundRepeat:'no-repeat',
            mt:20,
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
            px:'12px'
          }}
        >
          <Box
            component='img'
            src='/assets/svg/newsletter.svg'
            alt='logo'
            sx={{
              width: 116,
              marginTop: '150px',
            }}
          />

          <Typography
            variant='h2'
            sx={{
              fontWeight: 800,
              margin: {
                sm: '30px 80px',
                xs: '26px 12px ',
              },
            }}
          >
            The Future of Science Will be Open, Pluralist, and Impact Driven
          </Typography>

          <Button
            variant='contained'
            sx={styles.btn}
          >
            Create your identity
          </Button>

          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                sm: 'row',
                xs: 'column',
              },
              alignItems: 'center',
              justifyContent: 'space-around',
              maxWidth: '900px',
              m: {
                sm: '200px auto 10px',
                xs: '150px auto 10px',
              },
              p: {
                sm: '12px',
                xs: '28px 16px',
              },
              borderRadius: {
                sm: '80px',
                xs: '24px',
              },
              background:
                'linear-gradient(90.51deg, #373A83 0.37%, #3E4D81 50.01%, #975598 99.65%)',
              border: '1px solid rgba(253, 160, 255, 0.15)',
            }}
          >
            <Box
              component='img'
              src='/assets/svg/newsletterBtn.svg'
              alt='logo'
              sx={{
                width: 56,
                display: {
                  xs: 'none',
                  sm: 'block',
                },
              }}
            />

            <Typography
              style={{
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              Join over 200 DeSci members and explore the multiverse
            </Typography>

            <Button
              variant='contained'
              sx={[
                styles.btn,
                {
                  borderRadius: '46px',
                }
              ]}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: '18px',
                    sm: '20px',
                  },
                }}
              >
                List your Community
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              mt: 14,
              color: 'transparent',
            }}
          >
            .
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default NewsLetter;
