
/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
import { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

// import ImageButton from './ImageButton';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import MSelect from '@/components/MSelect';
import NewTwoButtons from '@/components/NewTwoButtons';
import PageGradient from '@/components/PageGradient';
import TwoButton from '@/components/TwoButton';
import { UserInfoDetails } from '@/pages/selectProfile';
import { selectCurrentTab } from '@/redux/slice/profileTab';

const select1 = [
  'Physics',
  'Astronomy',
  'Chemistry',
  'Biology',
  'Psycology',
  'Medical',
  'Materials',
  'Computer',
  'Engineering'
];

const select2 = [
  'Applied Research',
  'Modeling & Theory',
  'Experimentalist',
  'Grant Writing',
  'Project Management',
  'Communications'
];

const select3 = ['Primary Student', 'Undergraduate Student', 'Graduate Student', 'Post Doctoral', 'Faculty'];

interface IProps {
  setUserInfo?: (value: UserInfoDetails) => void
}

export default function About({ setUserInfo, }: IProps) {
  const dispatch = useDispatch();

  const [aboutYou, setAboutYou] = useState('');
  const [scienceDo, setScienceDo] = useState('');
  const [yourRole, setYourRole] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');

  const [selectDropdown, setSelectDropdown] = useState(true);

  useEffect(() => {
    if(setUserInfo)
    setUserInfo({
      currentStatus,
      yourRole,
      scienceDo,
      aboutYou,
    });
  }, [currentStatus, yourRole, scienceDo, aboutYou, setUserInfo]);

  return (
    <PageGradient>
      <Box
        sx={{
          textAlign: 'center',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'space-between',
          height: 600,
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
              setValue={setScienceDo}
            />

            <MSelect
              label='What is your role?'
              Options={select2}
              setValue={setYourRole}
            />

            <MSelect
              label='What is your current status?'
              Options={select3}
              setValue={setCurrentStatus}
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
          onChange={(e) => setAboutYou(e.target.value)}
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
        <NewTwoButtons
          title1='Skip'
          title2='Next'
          onClick2={() => dispatch(selectCurrentTab('accountLink'))
          }
          onClick1={() => dispatch(selectCurrentTab('uploadPhoto'))}
        />
      )}
    </PageGradient>
  );
}
