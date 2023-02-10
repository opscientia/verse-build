import React from 'react';

import { Box, Typography, Button } from '@mui/material';

interface IProps {
  imgUrl: string;
  title: string;
  btnOne: string;
}

export default function HyperCards({ imgUrl, title, btnOne, }: IProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px 10px',
        mt: 1,
      }}
    >
      <Box>
        <Box
          component='img'
          src={imgUrl}
          sx={{
            maxWidth: '210px',
            width:'100%',
            height: 208,
            borderRadius: '10px 10px',
          }}
        />
      </Box>

      <Box
        sx={{
          p: 1,
        }}
      >
        <Typography
          sx={{
            width: '173px',
            fontSize: '16px',
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            mt: 1,
            display: 'flex',
            gap: '10px',
          }}
        >
          <Button
            sx={{
              background: 'rgba(172, 220, 174, 0.2)',
              color: 'lightgreen',
              border: '1px solid rgba(172, 220, 174, 0.8)',
              borderRadius: '40px',
              padding: '0px 6px 0px 6px',
              fontSize: '11px',
              alignItems: 'center',
              width: 'fit-content',
            }}
          >
            {btnOne}
          </Button>

          <Button
            sx={{
              background: 'rgba(253, 160, 255, 0.2)',
              borderRadius: '40px',
              padding: '0px 6px 0px 6px',
              border: '1px solid rgba(253, 160, 255, 0.8)',
              color: 'pink',
              fontSize: '11px',
              alignItems: 'center',
              width: '84px',
            }}
          >
            Astronomer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
