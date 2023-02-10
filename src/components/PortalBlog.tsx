/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Box, Container, Typography } from '@mui/material';

const EXPLORE_CARD_DETAILS = [
  {
    id: 1,
    title: 'Professional Societies',
    desc: 'Find your niche, establish your reputation, and list your work for public funding.',
    img: '/assets/svg/check.svg',
  },
  {
    id: 2,
    title: 'DeSci Reputation',
    desc: 'Import your academic credentials, track your impact, and aggregate your activity for a portable reputation.',
    img: '/assets/images/icon2.png',
  },
  {
    id: 3,
    title: 'Integrated Web Services',
    desc: 'Bridge your research activity between smart contracts and common academic web services.',
    img: '/assets/images/icon3.png',
  },
  {
    id: 4,
    title: 'Hypercerts for Funding',
    desc: 'Transform your demonstrated impact across your communities into funding streams.',
    img: '/assets/images/icon4.png',
  },
];

export default function PortalBlog() {
  return (
    <Box
      sx={{
        px: {
          xs: 1.5,
          sm: 3,
        },
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          background:
            'linear-gradient(110.71deg, rgba(7, 10, 27, 0.15) 0%, rgba(178, 44, 181, 0.15) 100%), rgba(46, 47, 73, 0.25)',
          borderRadius: '32px',
          border: '1px solid rgba(253, 160, 255, 0.15)',
          py: {xs:3.5,sm:6},
          textAlign: 'left',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            },
            px: {
              xs: 1.5,
              sm: 3,
            },
            gap: {xs:'32px', md:6},
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              display: {
                xs: 'block',
                md: 'none',
              },
            }}
          >
            <Box
              component='img'
              src='/assets/svg/imgPlaceHolder.svg'
              sx={{
                width: '100%',
                maxWidth: 430,
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Typography
              variant='h3'
              sx={{
                flexGrow: 1,
                lineHeight: {
                  sm: '48px',
                },
              }}
            >
              An Open Portal to the Decentralized Web of Science
            </Typography>

            {EXPLORE_CARD_DETAILS.map((item, idx) => (
              <Box
                key={`EXPLORE_CARD_DETAILS__${item.id}__${idx}`}
                // @ts-ignore
                sx={{
                  display: 'flex',
                  justifyContent: {
                    xs: 'space-between',
                    md: 'center',
                  },
                  alignItems: 'center',
                  width: '100%',
                  gap: 2,
                  mt: {
                    xs: idx === 0 ? 5 : 3.5,
                    md: idx !== 0 ? 3 : 4,
                  },
                }}
              >
                <Box
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'flex',
                    },
                    alignItems: 'start',
                    gap: 2,
                  }}
                >
                  <Box component='img' src={item.img} />

                  <Box>
                    <Typography
                      variant='h5'
                      sx={{
                        mt: {
                          xs: 1.2,
                          md: 0,
                        },

                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#E4D7E9',
                        fontSize: 15,
                        mt: 0.6,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  component='img'
                  src='/assets/svg/leftIcon.svg'
                  width={15}
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              textAlign: 'center',
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          >
            <Box
              component='img'
              src='/assets/svg/imgPlaceHolder.svg'
              sx={{
                width: '100%',
                maxWidth: 430,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
