
import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import NewTwoButtons from '@/components/NewTwoButtons';
import PageGradient from '@/components/PageGradient';
import UploadFile from '@/components/UploadFile';
import { selectCurrentTab } from '@/redux/slice/profileTab';

interface IProps {
  userName: string,
  setUserName: (value: string) => void
}

export default function UploadProfile({ userName, setUserName, }: IProps) {
  const dispatch = useDispatch();

  return (
    <PageGradient>
      <Box>
        <Typography variant='h4'>Profile</Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '32px',
            marginTop: '24px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UploadFile />

          <Box>
            <Typography
              sx={{
                color: '#979797',
                fontSize: '14px',
                width: '160px',
                textAlign: 'left',
              }}
            >
              Upload your profile image or use an avatar
            </Typography>

          </Box>
        </Box>

        <Box
          sx={{
            textAlign: 'left',
            mt: 4,
          }}
        >
          <Typography>Username</Typography>

          <Box
            component='input'
            type='text'
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            sx={{
              border: '1px solid #393B50',
              backgroundColor: '#393B50',
              width: '100%',
              borderRadius: '12px',
              mt: 1,
              color: '#fff',
              outline: 'none',
              fontSize: 16,
              p: 1.6,
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 1,
            gap: '8px',
            '& p': {
              color: '#979797',
              fontSize: '',
            },
          }}
        >
          <Box
            component='img'
            src='/assets/images/caution.png'
          />

          <Typography>You can always change your username later.</Typography>
        </Box>
      </Box>

      <NewTwoButtons
        title1='Back'
        title2='Next'
        onClick1={() => dispatch(selectCurrentTab('selectProfile'))}
        onClick2={() => dispatch(selectCurrentTab('about'))}
      />
    </PageGradient>
  );
}
