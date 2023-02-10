/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';

import { Box, Typography } from '@mui/material';

// import ImageButton from './ImageButton';

import { useRouter } from 'next/router';

import MSelect from '@/components/MSelect';
import ShareCard from '@/components/ShareCard';
import TwoButton from '@/components/TwoButton';

export default function AccountLink() {
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
      }}
    >
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
          color: '#fff',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              mt: 1,
              fontWeight: 600,
            }}
          >
            Import your accounts
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.3rem',
              }}
            >
              Academic Credentials
            </Typography>

            <Box
              component='img'
              src='/assets/images/question.png'
              alt=''
            />
          </Box>
        </Box>

        <ShareCard
          imgUrl='/assets/images/ORCiD.png'
          title='ORCiD'
          decs='Link your account'
        />

        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.3rem',
              }}
            >
              Developer Credentials
            </Typography>

            <Box
              component='img'
              src='/assets/images/question.png'
              alt=''
            />
          </Box>

          <Box>
            <ShareCard
              imgUrl='/assets/images/gitHub.png'
              title='GitHub'
              decs='Link your account'
            />
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.3rem',
              }}
            >
              Social and Community
            </Typography>

            <Box
              component='img'
              src='/assets/images/question.png'
              alt=''
            />
          </Box>

          <ShareCard
            imgUrl='/assets/images/discord.png'
            title='Discord'
            decs='Link your account'
          />

          <ShareCard
            imgUrl='assets/images/Twitter.png'
            title='Twitter'
            decs='Link your account'
          />

          <TwoButton
            title1='Skip'
            title2='Next'
            sx={{
              mt:10,
            }}
            onClick2={() => router.push('/preview')}
          />
        </Box>
      </Box>
    </Box>
  );
}
