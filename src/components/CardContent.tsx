import React from 'react';

import { Box, IconButton, Typography } from '@mui/material';

import SvgIconStyle from './SvgIconStyle';

export default function CardContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {' '}

        <Typography
          sx={{
            fontSize: {
 xs: 15,
sm: 20, 
},
            color: '#FDF5FF',
          }}
        >
          Caleb Tuttle
        </Typography>

        <Box
          component='img'
          src='/assets/svg/correct.svg'
          sx={{
            width: 17,
            height: 17,
          }}
        />{' '}
      </Box>

      <Typography
        sx={{
          color: '#CEC5D1',
          fontSize: {
 xs: 9,
sm: 12, 
},
          // flexDirection: 'row',
          flexGrow: 1,
        }}
      >
        Software Developer at OpSci
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          '& button': {
            p: 0,
            color: 'rgba(253, 245, 255, 0.75)',
            '&:hover': {
              color: '#E3BBF1',
            },
          },
        }}
      >
        <IconButton>
          <SvgIconStyle
            src='/assets/svg/id.svg'
            sx={{
              width: 16,
              height: 16,
            }}
          />
        </IconButton>

        <IconButton>
          <SvgIconStyle
            src='/assets/svg/github.svg'
            sx={{
              width: 16,
              height: 16,
            }}
          />
        </IconButton>

        <IconButton>
          <SvgIconStyle
            src='/assets/svg/discord.svg'
            sx={{
              width: 16,
              height: 16,
            }}
          />
        </IconButton>

        <IconButton>
          <SvgIconStyle
            src='/assets/svg/twitter.svg'
            sx={{
              width: 16,
              height: 16,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
