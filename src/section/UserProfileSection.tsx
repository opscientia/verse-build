/* eslint-disable sonarjs/no-duplicate-string */

import { Box, Typography } from '@mui/material';

import ProfileDetails from '@/components/profileComponents/ProfileDetails';

import ProfileCom from './../components/ProfileCom';

export default function UserProfileSection() {
  return (
    <Box
      sx={{
        height: 'fit-content',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: 2.5,
        maxWidth: 1230,
        mx: 'auto',
        px: 2,
        mt: 10,
      }}
    >
      <Box
        sx={{
          gridColumn: '1/4',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              color: 'white',
            }}
          >
            Profile
          </Typography>

          <Typography
            sx={{
              color: '#FEC6C6',
              backgroundColor: 'rgba(254, 198, 198, 0.25)',
              width: 'fit-content',
              padding: '2px 10px',
              borderRadius: '36px',
              alignItems: 'center',
              display:'flex'
            }}
          >
            Verified by Holonym
          </Typography>
        </Box>

        <ProfileDetails />
      </Box>

      <Box
        sx={{
          gridColumn: '4/6',
        }}
      >
        <ProfileCom />
      </Box>
    </Box>
  );
}
