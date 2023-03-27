/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';

import { Box, Typography } from '@mui/material';

// import ImageButton from './ImageButton';

import { useRouter } from 'next/router';

import MSelect from '@/components/MSelect';
import NewTwoButtons from '@/components/NewTwoButtons';
import PageGradient from '@/components/PageGradient';
import ShareCard from '@/components/ShareCard';
import TwoButton from '@/components/TwoButton';

export default function AccountLink() {
  const router = useRouter();
  const [selectDropdown, setSelectDropdown] = useState(false);

  return (
    <PageGradient
     
    >
      <Box>
        <Box
          sx={{
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <Typography
            sx={{
              mt: 1,
              fontSize: 24,
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
              // justifyContent: 'space-between',
              gap: 1,
              alignItems: 'center',
              mt: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
              }}
            >
              Academic Credentials
            </Typography>

            <Box
              component='img'
              src='/assets/images/question.png'
              alt=''
              sx={{
                mt: 1,
              }}
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
              // justifyContent: 'space-between',
              gap: 1,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
              }}
            >
              Developer Credentials
            </Typography>

            <Box
              component='img'
              src='/assets/images/question.png'
              alt=''
              sx={{
                mt: 1,
              }}
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
              // justifyContent: 'space-between',
              gap: 1,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
              }}
            >
              Social and Community
            </Typography>

            <Box
              component='img'
              src='/assets/images/question.png'
              alt=''
              sx={{
                mt: 1,
              }}
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

          {/* <TwoButton
            title1='Skip'
            title2='Next'
            sx={{
              mt:10,
            }}
            onClick2={() => router.push('/preview')}
          /> */}
        </Box>
      </Box>

      <NewTwoButtons
        title1='Back'
        title2='Next'
        onClick1={() => router.push('/about')}
        onClick2={() => router.push('/preview')}
      />
    </PageGradient>
  );
}
