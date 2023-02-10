import React from 'react';

import { Box, Typography } from '@mui/material';

interface IProps {
  title: string;
  decs: string;
  imgUrl: string;
  cardDate: string;
}

export default function ProfileShareCard({ title, decs, imgUrl, cardDate, }: IProps) {
  return (
    <Box
      sx={{
        p: '12px 4px 12px 12px',
        borderRadius: '12px',
        border: '1px solid #32344F',

      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Box
          component='img'
          src={imgUrl}
          sx={{
            width: '32px',
            height: '32px',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'space-between',
          width:'100%'
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '16px',
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: '14px',
              }}
            >
              {decs}
            </Typography>

            <Typography
              sx={{
                fontSize: '14px',
                mt:2,
          color: '#949494',

              }}
            >
              {cardDate}
            </Typography>
          </Box>

          <Box
            component='img'
            src='/assets/images/Dots.png'
            sx={{
              width: '2.92px',
              height: '13px',
            }}
          />
        </Box>

        <Box />
      </Box>

    </Box>
  );
}
