import React from 'react';

import { Box, BoxProps, Button, ButtonProps } from '@mui/material';

import GradientText from './GradientText';

interface IProps {
  gradient?: string;
  title: string;
  sx?: ButtonProps;
  boxSx?: BoxProps;
  onClick?: () => void;
}

export default function GradientButton({ gradient, title, sx, boxSx,onClick }: IProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        ...boxSx,
      }}
    >
      <Button
      onClick={onClick}
        sx={{
          borderRadius: 2,
          background: '#1e1d32 !important',
          border: '2px solid transparent',
          // position: 'absolute',
          // // top: -18,
          // right:0,
          // left:0,
          color: '#fff',
          fontWeight: 600,
          width: 'max-content',
          '&:after': {
            position: 'absolute',
            top: -5,
            left: -5,
            right: -5,
            bottom: -5,
            background:
              gradient || 'linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',
            content: '""',
            zIndex: -1,
            borderRadius: 2,
          },
          ...sx,
        }}
      >
        <GradientText title={title} />
      </Button>
    </Box>
  );
}
