import React from 'react';

import { Box, Typography } from '@mui/material';

interface IProps{
  label:string;
  option:string;
}

export default function MSelect({label, option}:IProps) {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 16,
          color: '#FDF5FF',
          mt: 2,
          textAlign: 'left',
        }}
      >
        {label}
        
      </Typography>

      <Box
        component='select'
        sx={{
          fontSize: 16,
          color: '#CCCCCC',
          px: '16px',
          py: '12px',
          width: '100%',
          backgroundColor: '#393B50',
          borderRadius: '12px',
          my: 1,
          outline: 'none',

          '& svg': {
            mr: 1,
          },
        }}
      >
        <option value='volvo'>{option}</option>

        <option value='saab'>Saab</option>

        <option value='mercedes'>Mercedes</option>

        <option value='audi'>Audi</option>
      </Box>
    </div>
  );
}
