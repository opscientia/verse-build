/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useState } from 'react';

import { Box, Typography } from '@mui/material';

// import ImageButton from './ImageButton';

import { useRouter } from 'next/router';

import MSelect from '@/components/MSelect';
import TwoButton from '@/components/TwoButton';

export default function About() {
  const router = useRouter();
  const [selectDropdown, setSelectDropdown] = useState(false);

  return (
    <Box
      sx={{
        background: 'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
        height: '100vh',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          background: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
          border: '1px solid rgba(253, 160, 255, 0.1)',
          maxWidth: 382,
          width: '100%',
          p: '24px',
          borderRadius: '12px',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}>
        <Box
          sx={{
            textAlign: 'center',
            overflow: 'hidden',
          }}>
          <Typography
            variant='h4'
            sx={{
              mt: 1,
              fontWeight: 600,
            }}>
            About
          </Typography>

          {selectDropdown && (
            <>
              <MSelect label='What kind of science do you do?' option='Select response' />

              <MSelect label='What is your role?' option='Select response' />

              <MSelect label='What is your current status?' option='Select response' />
            </>
          )}

          <Typography
            sx={{
              fontSize: 16,
              color: '#FDF5FF',
              mt: 2,
              textAlign: 'left',
            }}>
            {selectDropdown ? 'About you' : 'Please enter a username'}
          </Typography>

          <Box
            component={'textarea'}
            placeholder='Describe your academic interests and experience!'
            rows={4}
            sx={{
              mt: 2,
              maxWidth: 325,
              width: '100%',
              fontSize: 16,
              background: 'transparent',
              color: '#CCCCCC',
              p: 1,
              borderRadius: 2,
              border: '2px solid #957c9d61',
              '&::placeholder': {
                color: '#cccccc',
              },
            }}
          />

          {!selectDropdown && (
            <>
              <Typography
                sx={{
                  fontSize: 12,
                  color: '#957C9D',
                  mt: 1,
                }}>
                You can always change your <br /> username later.
              </Typography>

              <TwoButton title1='Skip' title2='Next' onClick2={() => setSelectDropdown(true)} />
            </>
          )}
        </Box>

        {selectDropdown && <TwoButton title1='Skip' title2='Next' onClick2={() => router.push('/accountlink')} />}
      </Box>
    </Box>
  );
}
