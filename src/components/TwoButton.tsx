/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Box, BoxProps, Button } from '@mui/material';

import GradientButton from './GradientButton';

interface IProps {
  title1: string;
  title2: string;
  onClick2 ?: () => void;
  sx?: BoxProps;
  onClick?: () => void;
}

export default function TwoButton({ title1, title2, onClick2, onClick, sx}: IProps) {
  return (
    <div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1.5,
          mt: 4,
          ...sx,
        }}
      >
        <GradientButton
          title={title1}
          onClick={onClick}
          gradient='linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)'
          boxSx={{
            // border:'red'

          }}
          sx={{
            // @ts-ignore
            width: '100%',
            height: '100%',
            background: '#1e191f12 !important',
            '&:after':{
            background: 'linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',

            }
          }}
        />

        <Button
          fullWidth
          variant='contained'
          onClick={onClick2}
          sx={{
            background: 'linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',
            color: '#000',
            borderRadius: '12px',
            py: '12px',
            fontSize: '16px',
          }}
        >
          {title2}
        </Button>
      </Box>
    </div>
  );
}
