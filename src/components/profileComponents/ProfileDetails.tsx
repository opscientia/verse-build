/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import MAccordion from './MAccordion';
import ProfileShareCard from './ProfileShareCard';

export default function ProfileDetails() {
  return (
    <Box
      sx={{
        background: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
        border: '1px solid rgba(253, 160, 255, 0.1)',
        p: '24px',
        borderRadius: '12px',
        maxHeight: 'fit-content',
        overflowY: 'auto',
        color: '#fff',
        mt: 2.2,
        mr:0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          width: 'fit-content',
          padding: '6px 16px',
          borderRadius: '36px',
          float: 'right',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <Box
          component='img'
          src='/assets/images/EditProfile.png'
          sx={{
            width: '15px',
            height: '15px',
          }}
        />

        <Typography
          sx={{
            fontSize: '16px',
          }}
        >
          Edit Profile
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 25,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
          }}
        >
          <Box
            sx={{
              '& p': {
                fontSize: '24px',
              },
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Box
                component='img'
                src='/assets/images/FaceLogo.png'
              />

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Typography>Vera Rubin</Typography>

                  <Box
                    component='img'
                    src='/assets/images/BlueTick.png'
                    sx={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '16px',
                      color: '#FDA0FF',
                    }}
                  >
                    <u> View public profile</u>
                  </Typography>

                  <Box
                    component='img'
                    src='/assets/images/Arrow.svg'
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: '16px',
              color: '#C3C3C3',
              mt: 1.8,
            }}
          >
            @verarubin
          </Typography>

          <Box
            sx={{
              mt: 1.8,
              display: 'flex',
              gap: '10px',
            }}
          >
            <Button
              sx={{
                background: 'rgba(253, 160, 255, 0.2)',
                borderRadius: '40px',
                padding: '8px 16px',
                border: '1px solid rgba(253, 160, 255, 0.8)',
                color: 'pink',
                fontSize: '14px',
                alignItems: 'center',
              }}
            >
              Astronomer
            </Button>

            <Button
              sx={{
                background: 'rgba(172, 220, 174, 0.2)',
                color: 'lightgreen',
                border: '1px solid rgba(172, 220, 174, 0.8)',
                borderRadius: '40px',
                padding: '8px 16px',
                fontSize: '14px',
                alignItems: 'center',
              }}
            >
              Legacy Scientist
            </Button>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: '16px',
              mt: 3,
            }}
          >
            American Astronomer
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: '16px',
              color: '#C3C3C3',
            }}
          >
            Pioneered work on galaxy rotation rates. She uncovered the discrepancy between the predicted and observed
            angular motion of galaxies by studying galactic rotation curves. She was honored throughout her career for
            her work, receiving the Bruce Medal, the Gold Medal of the Royal Astronomical Society, and the National
            Medal of Science, among others
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#2A2C45',
              padding: '10px 8px 10px 8px',
              mt: 3,
              borderRadius: '8px 8px 0px 0px',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '20px',

                  gap: '6px',
                }}
              >
                Holonym{' '}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  backgroundColor: '#363855',
                  borderRadius: '36px',
                  width: '30px',
                  height: '30px',
                  alignItems: 'center',
                  ml:1,
                }}
              >
                <Box
                  component='img'
                  src='/assets/images/settings.png'
                  sx={{
                    height: '20px',
                    width: '20px',
                    ml: 0.6,
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  padding: '0',
                  display: 'flex',
                  width: 'fit-content',
                  borderRadius: '8px 8px',
                  gap: '5px',
                  alignItems: 'center',
                  border: '1px solid #474965',
                }}
              >
                <Box
                  sx={{
                    color: '#8C8A8A',
                    backgroundColor: '#474965',
                    borderRadius: '8px 0px 0px 8px',
                    padding: '4px',
                    fontWeight: '10px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      borderRadius: '8px 0px 0px 8px',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'white',
                    }}
                  >
                    <Box
                      component='img'
                      src='/assets/images/Holo.png'
                      sx={{
                        color: '#FFFFFF',
                        width: '21.81px',
                        height: '16px',
                      }}
                    />

                    <Typography
                      sx={{
                        fontStyle: 'italic',
                      }}
                    >
                      HOLO
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    pr: 0.6,
                    color: '#C3C3C3',
                  }}
                >
                  0x23456732...890
                </Typography>
              </Box>

              <Box
                component='img'
                src='/assets/images/Icon (1).png'
                sx={{
                  width: '9px',
                  height: '16px',
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: '#272739',
              borderRadius: '0px 0px 12px 12px',
              padding: '16px 16px 24px',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '18px',
                }}
              >
                ZK Proofs
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 3,
                display: 'flex',
                gap: '60px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  border: '1px solid #474965',
                  width: 'fit-content',
                  padding: 1,
                  borderRadius: '10px',
                }}
              >
                <Box
                  component='img'
                  src='/assets/images/Shield.png'
                  sx={{
                    width: '13.18px',
                    height: '16px',
                  }}
                />

                <Typography
                  sx={{
                    fontSize: '16px',
                  }}
                >
                  Uniqueness
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  border: '1px solid #474965',
                  width: 'fit-content',
                  padding: 1,
                  borderRadius: '10px',
                }}
              >
                <Box
                  component='img'
                  src='/assets/images/Shield.png'
                  sx={{
                    width: '13.18px',
                    height: '16px',
                  }}
                />

                <Typography
                  sx={{
                    fontSize: '16px',
                  }}
                >
                  U.S. Residency
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  border: '1px solid #474965',
                  width: 'fit-content',
                  padding: 1,
                  borderRadius: '10px',
                }}
              >
                <Box
                  component='img'
                  src='/assets/images/Shield.png'
                  sx={{
                    width: '13.18px',
                    height: '16px',
                  }}
                />

                <Typography
                  sx={{
                    fontSize: '16px',
                  }}
                >
                  Ph.D
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#2A2C45',
              padding: '10px 8px 10px 8px',
              mt: 3,
              borderRadius: '8px 8px 0px 0px',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              Contract Address{' '}

              <Box
                sx={{
                  display: 'flex',
                  backgroundColor: '#363855',
                  borderRadius: '36px',
                  width: '30px',
                  height: '30px',
                  alignItems: 'center',
                  ml:1,
                }}
              >
                <Box
                  component='img'
                  src='/assets/images/settings.png'
                  sx={{
                    height: '20px',
                    width: '20px',
                    ml: 0.6,
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              backgroundColor: '#272739',
              padding: '16px 10px 16px 10px',
              borderRadius: '0px 0px 12px 12px',
              gap: '100px',
            }}
          >
            <Box
              sx={{
                padding: '0',
                display: 'flex',
                width: 'fit-content',
                borderRadius: '8px 8px',
                gap: '5px',
                alignItems: 'center',
                border: '1px solid #474965',
              }}
            >
              <Box
                sx={{
                  color: '#8C8A8A',
                  backgroundColor: '#474965',
                  borderRadius: '8px 0px 0px 8px',
                  padding: '4px',
                  fontWeight: '10px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    borderRadius: '8px 0px 0px 8px',
                    alignItems: 'center',
                    gap: '5px',
                    color: 'white',
                  }}
                >
                  <Box
                    component='img'
                    src='/assets/images/Box.png'
                    sx={{
                      color: '#FFFFFF',
                      width: '18px',
                      height: '19.71px',
                    }}
                  />
                  Address
                </Box>
              </Box>

              <Typography
                sx={{
                  pr: 0.6,
                  color: '#C3C3C3',
                }}
              >
                0x234567...890
              </Typography>
            </Box>

            <Box
              sx={{
                padding: '0',
                display: 'flex',
                width: 'fit-content',
                borderRadius: '8px 8px',
                gap: '5px',
                alignItems: 'center',
                border: '1px solid #474965',
              }}
            >
              <Box
                sx={{
                  color: '#8C8A8A',
                  backgroundColor: '#474965',
                  borderRadius: '8px 0px 0px 8px',
                  padding: '4px',
                  fontWeight: '10px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    borderRadius: '8px 0px 0px 8px',
                    alignItems: 'center',
                    gap: '5px',
                    color: 'white',
                  }}
                >
                  <Box
                    component='img'
                    src='/assets/images/Globe.png'
                    sx={{
                      color: '#FFFFFF',
                      width: '18px',
                      height: '19.71px',
                    }}
                  />
                  ENS
                </Box>
              </Box>

              <Typography
                sx={{
                  pr: 0.6,
                  color: '#C3C3C3',
                }}
              >
                vera.rubin.desci.eth
              </Typography>
            </Box>
          </Box>
        </Box>

        <MAccordion />
      </Box>
    </Box>
  );
}
