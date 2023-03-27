import React from 'react';

import { Box, BoxProps, Button, ButtonProps } from '@mui/material';

interface IProps {
  onClick1?: () => void;
  onClick2?: () => void;
  title1: string;
  title2: string;
  sx?:BoxProps | ButtonProps | any;
}

export default function NewTwoButtons({ onClick1, onClick2, title1, title2,sx }:IProps) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          ...sx
        }}
      >
        <Button
        onClick={onClick1}
          variant='outlined'
          sx={{
            backgroundColor: '#2A274A',
            border: '1px solid rgba(142, 73, 228, 0.4)',
            color: 'white',
            textTransform: 'none',
            width: '49%',
            py: 1.4,
            '&:hover': {
              backgroundColor: '#2A274A',
            },
          }}
        >
          {title1}
        </Button>

        <Button
          onClick={onClick2}
          variant='outlined'
          sx={{
            backgroundColor: '#782DC7',
            border: '1px solid rgba(142, 73, 228, 0.4)',
            textTransform: 'none',
            color: 'white',
            width: '49%',
            py: 1.4,
            '&:hover': {
              backgroundColor: '#782DC7',
            },
          }}
        >
          {title2}
        </Button>
      </Box>
    </div>
  );
}
