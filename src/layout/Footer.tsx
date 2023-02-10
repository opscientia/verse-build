import React from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';

import SvgIconStyle from '../components/SvgIconStyle';

const styles = {
  h3: {
    fontWeight: 700,
  },
  link: {
    fontSize: 15,
    color: '#CEC5D1',
    mt: 1,
  },
  icon: {
    width: '32px',
    height: '32px',
    color: '#957C9D',
    margin: '0 16px',
  },
};

function Footer() {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(7, 10, 27, 0) 60%, rgba(253, 160, 255, 0.15) 100%)',
        overflowX: 'hidden',
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          mt: 10,
          pb: '30px',
          px: 3,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(2, 1fr)',
            },
            gap: 2,
          }}
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
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              // justifyContent:'end',
              gridColumn: {
                sm: '2/4',
                md: '2/3',
              },
              gap: 2,
              mt: {
                xs: '48px',
                sm: 'auto',
              },
              marginLeft: {
                xs: '0',
                sm: '60px',
              },
            }}
          >
            <Box
              sx={{
                justifySelf: {
                  sm: 'end',
                },
              }}
            >
              <Typography style={styles.h3}>Product </Typography>

              <Typography sx={styles.link}>Docs</Typography>

              <Typography sx={styles.link}>Features</Typography>

              <Typography sx={styles.link}>Changelog</Typography>

              <Typography sx={styles.link}>Download</Typography>
            </Box>

            <Box
              sx={{
                justifySelf: {
                  sm: 'end',
                },
              }}
            >
              <Typography style={styles.h3}>Company </Typography>

              <Typography sx={styles.link}>Ecosystem</Typography>

              <Typography sx={styles.link}>Whitepaper</Typography>

              <Typography sx={styles.link}>Roadmap</Typography>

              <Typography sx={styles.link}>About</Typography>
            </Box>

            <Box
              sx={{
                justifySelf: {
                  sm: 'end',
                },
              }}
            >
              <Typography style={styles.h3}>Overview </Typography>

              <Typography sx={styles.link}>Community</Typography>

              <Typography sx={styles.link}>Research</Typography>

              <Typography sx={styles.link}>Careers</Typography>

              <Typography sx={styles.link}>FAQs</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: '50px',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            display: 'grid',
            gridTemplateColumns: {
              md: 'repeat(2, 1fr)',
            },
            alignItems: 'center',
            justifyContent: {
              xs: 'center',
              md: 'space-between',
            },
          }}
        >
          <Typography
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
              color: '#957C9D',
            }}
          >
            © 2022 Verse by OPSCI · All rights reserved.
          </Typography>

          <Box
            sx={{
              textAlign: {
                xs: 'center',
                md: 'right',
              },
              '& span': {
                mx: {
                  xs: 1,
                  md: 2,
                },
              },
            }}
            // order={{
            //   xs: 1,
            //   sm: 2,
            // }}
          >
            <SvgIconStyle
              src='/assets/svg/f_social.svg'
              sx={styles.icon}
            />

            <SvgIconStyle
              src='/assets/svg/f_github.svg'
              sx={styles.icon}
            />

            <SvgIconStyle
              src='/assets/svg/f_social2.svg'
              sx={styles.icon}
            />

            <SvgIconStyle
              src='/assets/svg/f_twitter.svg'
              sx={styles.icon}
            />

            <SvgIconStyle
              src='/assets/svg/f_social3.svg'
              sx={styles.icon}
            />

            <SvgIconStyle
              src='/assets/svg/f_social4.svg'
              sx={styles.icon}
            />
          </Box>
        </Box>

        <Typography
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
            color: '#957C9D',
            textAlign: 'center',
            mt: 3,
          }}
        >
          © 2022 Verse by OPSCI · All rights reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
