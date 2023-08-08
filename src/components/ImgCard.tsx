import React from 'react';

import { Box, Typography } from '@mui/material';

interface IProps {
  imgUrl?: string;
  title?: string;
}

export default function BrowseCards({ imgUrl, title, }:IProps) {
  return (
    <Box
      sx={{
      backgroundColor: '#393B50',
      padding: {xs:2, sm:3},
      height: 181,
      maxWidth:181,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
    }}
    >
      <Box>
        <Box
          component='img'
          src={imgUrl}
          sx={{
 width:70, 
}}
        />

        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
}
