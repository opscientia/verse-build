/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';

import { Box, Typography, Divider, Grid } from '@mui/material';

import HyperCerts from './HyperCerts';

const galaxyCardData = [
  {
    id: 1,
    img: '/assets/images/HyperImgOne.png',
    title: 'Finding Cepheid Variable Stars',
  },
  {
    id: 1,
    img: '/assets/images/HyperImgTwo.png',
    title: 'Neutron Star Binary Mergers',
  },
  {
    id: 1,
    img: '/assets/images/HyperImgThree.png',
    title: 'High Energy Astrophysics Science',
    btn1: 'Dataset',
  },
  {
    id: 1,
    img: '/assets/images/HyperImgFour.png',
    title: 'Black Hole Waveform Catalog',
  }
];


const VARIATIONS = [
  {
    id: 1,
    title: 'Rank',
    desc: '#1',
  },
  {
    id: 2,
    title: 'Impact',
    desc: '56',
    sub: 'ETH',
  },
  {
    id: 3,
    title: 'Rank',
    desc: '#1',
  },
  {
    id: 4,
    title: 'Members',
    desc: '714',
  },
  {
    id: 5,
    title: 'Hypercerts',
    desc: '87',
  },
  {
    id: 6,
    title: 'Followers',
    desc: '2.978',
  }
];

export default function ProfileCom() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          color: 'white',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
          }}
        >
          Societies
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '6.28px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            width: 'fit-content',
            padding: '6px 12px',
            borderRadius: '36px',
          }}
        >
          <Box
            component='img'
            src='/assets/images/settings.png'
            sx={{
              width: '17.44px',
              height: '12px,',
            }}
          />

          <Typography>Settings</Typography>
        </Box>
      </Box>

      
      {/* start of error */}

      <Box
        sx={{
          height: '100%',
          display: 'flex',
          width: '100%',
        }}
      >
        <Box
          sx={{
            background: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
            border: '1px solid rgba(253, 160, 255, 0.1)',
            width: '482px',
            p: '24px',
            borderRadius: '12px',
            maxHeight: '100vh',
            overflowY: 'auto',
            color: '#fff',
            mt: 2.1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
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
                  textDecoration: 'underline',
                }}
              >
                Society page
              </Typography>

              <Box
                component='img'
                src='/assets/images/Arrow.svg'
                sx={{
                  width: '8px',
                  height: '8px',
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#FDA0FF',
                background: 'rgba(254, 198, 198, 0.25)',
                padding: '2px 8px 2px 8px',
                borderRadius: '36px',
              }}
            >
              Admin
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 3.6,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                textAlign: 'left',
                gap: '19px',
                alignItems: 'center',
              }}
            >
              <Box
                component='img'
                src='/assets/images/verseModal.png'
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: '24px',
                  }}
                >
                  OpSci Society
                </Typography>

                <Typography
                  sx={{
                    color: '#E3BBF1',
                  }}
                >
                  @opsci #openscience
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                textAlign: 'left',
                mt: 2.2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#FDF5FF',
                }}
              >
                Web-native community of scientist, building public goods to streamline research and innovation.
              </Typography>
            </Box>
          </Box>

          <Box
          sx={{
            border: '1px solid #654B78',
            borderRadius: '12px',
            my: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {VARIATIONS.map((variation, idx) => {
            return (
              <Box key={variation.id}>
                <Box
                  p={2}
                  sx={{
                    display: idx !== 2 ? 'flex' : 'none',
                    flexDirection: 'column',
                    borderTop:idx > 2 ?'1px solid #654B78' : '0px',

                  }}
                >
                  <Typography color='#E3BBF1'>{variation.title}</Typography>

                  <Typography variant='h3'>
                    {variation.desc} <Typography component='sub'>{variation.sub}</Typography>
                  </Typography>
                </Box>

                <Box
                  p={2}
                  sx={{
                    display: idx === 2 ? 'flex' : 'none',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    component='img'
                    src='/assets/images/chart.png'
                    sx={{
                      width:'100%',
                      height:'100%',
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
        </Box>
      </Box>

      {/* end of error */}
      <Box
        sx={{
          display: 'flex',
          color: 'white',
          justifyContent: 'space-between',
          mt: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
          }}
        >
          Hypercerts
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '6.28px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            width: 'fit-content',
            padding: '6px 12px',
            borderRadius: '36px',
          }}
        >
          <Box
            component='img'
            src='/assets/images/settings.png'
            sx={{
              width: '17.44px',
              height: '12px,',
            }}
          />

          <Typography>Settings</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          background: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
          border: '1px solid rgba(253, 160, 255, 0.1)',
          maxWidth: '482px',
          p: '24px',
          borderRadius: '12px',
          maxHeight: '100vh',
          overflowY: 'auto',
          color: '#fff',
          mt: 2.1,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '16px',
          }}
        >
          {galaxyCardData.map((item, idx) => (
            <HyperCerts
              key={idx}
              title={item.title}
              btnOne={item.btn1 || 'DeSci Tooling'}
              imgUrl={item.img}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
