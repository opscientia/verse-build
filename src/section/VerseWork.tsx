/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Box, Button, Container, Typography } from '@mui/material';

import GradientButton from '../components/GradientButton';
import PortalBlog from '../components/PortalBlog';
import useResponsive from '../hooks/useResponsive';
import { colorGradients } from '@/components/Style';

const EXPLORE_CARD_DETAILS = [
  {
    id: 2,
    title: 'Embedded Academic Web Services',
    desc: 'Link and aggregate the web services you already trust and know such as ORCID, SSRN, or the Open Science Framework.',
  },

  {
    id: 4,
    title: 'Verified Credentials',
    desc: 'Misinformation and bots have no place on Verse. Verse is sybil resistant with verified academic credentials and identity proofs.',
  },
  {
    id: 5,
    title: 'Universal, Portable, Profiles',
    desc: 'Link your accounts, verify your credentials once, and your reputation goes with you across communities and societies.',
  },
  {
    id: 3,
    title: 'Academic Personas',
    desc: 'Curate your own academic persona, or  publish with your public identity. You choose how to represent yourself online.',
  },

  {
    id: 6,
    title: 'Unlock Funding Streams',
    desc: 'Verse is built on the Hypercerts standard allowing members to transform their demonstrated impact into funding.',
  },
  {
    id: 1,
    title: 'Open Source & Permission-less',
    desc: 'The source code is available for anyone to fork, modify, or deploy their own registry. Get started by visiting our developer docs.',
  }
];

export default function VerseWork() {
  const isMobile = useResponsive('up', 'sm');

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',

          mx: 'auto',
          // pt: {
          //   xs: 20,
          //   sm: 43,
          // },
          ...(isMobile && {
          //   background: 'url(/assets/svg/explore.svg)',
          background:
            ' radial-gradient(50% 50% at 50% 50%, rgba(253, 160, 255, 0.25) -20%, rgba(7, 10, 27, 0) 85.94%)',
          }),
          backgroundSize: {
            xs: 'cover',
            md: 'contain',
          },

          
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Container
          maxWidth='md'
          sx={{
            border: '1px solid transparent',
            pb: 5,
            px: '12px',
          }}
        >
          <Box
            component='img'
            src='/assets/svg/explo.svg'
            sx={{
              maxWidth: 340,
              width: '100%',
              mx: 'auto',
              display: {
                // sm: 'none',
              },
            }}
          />

          <Typography
            variant='h2'
            sx={
              {
                // pt: 38,
              }
            }
          >
            Explore how Verse works <br /> in the DeSci ecosystem
          </Typography>

          <Typography
            variant='h5'
            sx={{
              color: '#C0B9B9',
              mt: 4,
            }}
          >
            Decentralized science is a movement that bootstraps web-native
            communities of researchers to connect, find support, and explore the
            mysteries of the universe together.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              },
              gap: {
                xs: '28px',
                sm: 2,
              },
              justifyContent: 'center',
              my: {
                xs: 4,
                sm: 5,
              },
            }}
          >
            <Button
              variant='contained'
              sx={{
                // @ts-ignore
                background: colorGradients.mainGradient,
                color: '#1B1D32',
                borderRadius: 2,
                fontWeight: 600,
                px: '30px',
                width: {
                  xs: 228,
                  sm: 'max-content',
                },
                justifySelf: {
                  xs: 'center',
                  sm: 'right',
                },
                height: 48,
                '&:hover': {
                  // @ts-ignore
                  background: colorGradients.hoverGradient,
                },
              }}
            >
              Get started
            </Button>

            <GradientButton
              title='Docs'
              boxSx={{
                height: 'fit-content',
                width: '100%',
                border: '2px solid transparent',
                textAlign:{sm:'left'},
              }}
              sx={{
                // @ts-ignore
                width: {
                  xs: 228,
                  sm: 'max-content',
                },
                minWidth:155,
                mx: {
                  xs: 'auto',
                  sm: 0,
                },
                px: '30px',
                height: 44,
              }}
            />
          </Box>
        </Container>

        <Box
          sx={{
            // background: 'url(/assets/svg/exploreBg.svg)',
            // height: 500,
            mt: {
              xs: 4,
              sm: 'auto',
            },
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <PortalBlog />

          <Typography
            sx={{
              color: 'transparent',
              mt: {
                xs: 6,
                sm: 20,
              },
            }}
          >
            .
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          py: 5,
          background:
            'linear-gradient(90deg, #070A1B -0.72%, rgba(0, 0, 0, 0) 49.12%, #070A1B 100%), rgba(46, 47, 73, 0.5)',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1300,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              textAlign: 'start',
              columnGap: 7,
              px: 1,
              rowGap: 4,
            }}
          >
            {EXPLORE_CARD_DETAILS.map((item, idx) => (
              <Box
                key={`EXPLORE_CARD_DETAILS__${item.id}__${idx}`}
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: 2,
                }}
              >
                <Box
                  component='img'
                  src='/assets/svg/colorIcon.svg'
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 16,
                        sm: 18,
                      },
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#E4D7E9',
                      fontSize: {
                        xs: 13,
                        sm: 15,
                      },
                      mt: 0.6,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
