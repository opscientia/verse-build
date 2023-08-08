import React from 'react';

import { Box, Grid, Typography, Divider } from '@mui/material';

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

export default function ModalBox() {
  return (
    <div>
      <Box>
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
                  sx={{
                    display: idx !== 2 ? 'flex' : 'none',
                    flexDirection: 'column',
                    borderTop:idx > 2 ?'1px solid #654B78' : '0px',
                    p:{xs:1, sm:2},
                    textAlign: 'left'
                  }}
                >
                  <Typography color='#C398F9'>{variation.title}</Typography>

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
                    src='/assets/svg/chart.svg'
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

        <Box
          sx={{
            textAlign: 'left',
          }}
        >
          <Typography>Society requirements</Typography>

          <Box
            sx={{
              mt: 0.5,
              pl: 3,
              '& ul li ': {
                fontSize: 14,
                color:'#9C9C9C'
              },
            }}
          >
            <ul>
              <li>Linking orcid, github, twitter and discord.</li>

              <li>Follow twitter @opscientia</li>

              <li>Join community on discord</li>
            </ul>
           
          </Box>

        </Box>
      </Box>
    </div>
  );
}
