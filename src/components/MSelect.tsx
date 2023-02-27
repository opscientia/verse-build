import React from 'react';

import { Box, Typography } from '@mui/material';

interface IProps {
  label: string;
  Options: any;
}

export default function MSelect({ label, Options }: IProps) {
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
        defaultValue={'Select response'}
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
          '& option': {
            color: '#fff'
          }
        }}
      >
        <option disabled label='Select Response' />
        {Options.map((item: string) => <option value={item} style={{

          color: '#fff'
        }}>{item}</option>)}

      </Box>
    </div>
  );
}
