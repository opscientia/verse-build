/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState } from 'react';

import { Box, IconButton, Typography } from '@mui/material';

import CardContent from './CardContent';
import SvgIconStyle from './SvgIconStyle';

export default function SliderCard() {
  const [isShow, setIsShow] = useState(true);
  const handleMouseHover = () => {
    setIsShow(false);
  };

  const handleMouseLeave = () => {
    setIsShow(true);
    console.log('hie');
  };

  return (
    <Box>
      <Box
        onMouseOut={handleMouseLeave}
        sx={{
          width: {
            xs: 239,
            sm: 314,
          },
          height: {
            xs: 88,
            sm: 105,
          },
          borderRadius: 100,
          background: isShow
            ? 'rgba(46, 47, 73, 0.75)'
            : ' linear-gradient(90deg, rgba(53, 105, 183, 0.25) 0%, rgba(125, 32, 140, 0.25) 100%), rgba(46, 47, 73, 0.75)',
          border: isShow
            ? '1px solid rgba(253, 245, 255, 0.15)'
            : '2px solid #fda0ff9e',
          justifySelf: 'center',
          display: 'flex',
          p: 1,
          gap: '10px',
          '& div': {
            animation: isShow && 'fadeInAnimation ease 2.5s',
          },
          '& *': {
            animation: !isShow && 'fadeInAnimation ease 2s',
            animationIterationCount: 1,
            animationFillMode: 'forwards',
            '@keyframes fadeInAnimation': {
              '0%': {
                opacity: 0,
              },
              '100%': {
                opacity: 1,
              },
            },
          },
        }}
      >
        <Box
          onMouseEnter={handleMouseHover}
          component='img'
          src={
            isShow ? '/assets/images/p1.png' : '/assets/images/cardImage.png'
          }
          sx={{
            width: {
              xs: 70,
              sm: 88,
            },
            height: {
              xs: 70,
              sm: 88,
            },
            cursor: 'pointer',
          }}
        />

        {isShow && <CardContent />}

        {/* on mouse over */}

        {!isShow && (
          <Box>
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
                    xs: 12,
                    sm: 16,
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
                  width: 14,
                  height: 14,
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
              Society: <br />

              Reputation: <br />

              Since: <br />
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
