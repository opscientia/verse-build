import React from 'react';

import { Box, Typography } from '@mui/material';

interface IProps {
  title:string,
  decs: string,
  imgUrl: string,
}

export default function ShareCard({ title, decs, imgUrl, }:IProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 1.5,
        gap: 1,
        backgroundColor: '#393B50',
        mt: 1,
        borderRadius: 3,
      }}
    >
      <Box>
        <Box
          component='img'
          src={imgUrl}
          alt=''
        />
      </Box>

      <Box>
        <Typography>{title}</Typography>

        <Typography
          sx={{
            color: '#AEAEAE',
          }}
        >
          {decs}
        </Typography>
      </Box>
    </Box>
  );
}
