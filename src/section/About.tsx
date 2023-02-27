/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useState } from 'react';

import { Box, Typography } from '@mui/material';

// import ImageButton from './ImageButton';

import { useRouter } from 'next/router';

import MSelect from '@/components/MSelect';
import PageGradient from '@/components/PageGradient';
import TwoButton from '@/components/TwoButton';


const select1 = [
  'Physics',
  'Astronomy',
  'Chemistry',
  'Biology',
  'Psycology',
  'Medical',
  'Materials',
  'Computer',
  'Engineering',
]

const select2 = [
  'Applied Research',
  'Modeling & Theory',
  'Experimentalist',
  'Grant Writing',
  'Project Management',
  'Communications',
]

const select3 = [
  'Primary Student',
  'Undergraduate Student',
  'Graduate Student',
  'Post Doctoral',
  'Faculty',
]
export default function About() {
  const router = useRouter();
  const [selectDropdown, setSelectDropdown] = useState(true);

  return (
    <PageGradient>
      <Box
        sx={{
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Typography
          // variant='h4'
          sx={{
            mt: 1,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          About
        </Typography>

        {selectDropdown && (
          <>
            <MSelect
              label='What kind of science do you do?'
              Options={select1}
            />

            <MSelect
              label='What is your role?'
              Options={select2}
            />

            <MSelect
              label='What is your current status?'
              Options={select3}
            />
          </>
        )}

        <Typography
          sx={{
            fontSize: 16,
            color: '#FDF5FF',
            mt: 2,
            textAlign: 'left',
          }}
        >
          {selectDropdown ? 'About you' : 'Please enter a username'}
        </Typography>

        <Box
          component='textarea'
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
              }}
            >
              You can always change your <br /> username later.
            </Typography>

            <TwoButton
              title1='Skip'
              title2='Next'
              onClick2={() => setSelectDropdown(true)}
            />
          </>
        )}
      </Box>

      {selectDropdown && (
        <TwoButton
          title1='Skip'
          title2='Next'
          onClick2={() => router.push('/accountlink')}
        />
      )}
    </PageGradient>
  );
}
