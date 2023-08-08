import React from 'react';

import { Box, Divider, Button } from '@mui/material';
import Link from 'next/link';

export default function ProfileNavbar() {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            p: 2,
            justifyContent: 'space-between',
            width: '80%',
            m: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '50px',
            }}
          >
            <Box
              component='img'
              src='/assets/images/logo.png'
              sx={{
                width: '116px',
                height: '32px',
              }}
            />

            <Box
              sx={{
                display: 'flex',
                border: '1px solid grey',
                borderRadius: '40px',
                p: '8px 10px',
                color: 'white',
                alignItems: 'center',
                width: 262,
              }}
            >
              <Box
                component='img'
                src='/assets/images/searchIcon.png'
              />

              <Box
                component='input'
                id='input-with-icon-adornment'
                placeholder='Search'
                color='#434242'
                sx={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  pl: '6px',
                  fontSize: '16px',
                  outline: 'none',
                  color: 'white',
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: '24px',
                '& p': {
                  fontSize: '16px',
                },
              }}
            >
              <Box
                component={Link}
                href='/'
                sx={{
                  color: 'white',
                  textTransform: 'none',
                }}
              >
                Profile
              </Box>

              <Box
              component={Link}
              href='/'
                sx={{
                  textTransform: 'none',
                  color: '#898989',
                }}
              >
                Hypercerts
              </Box>

              <Box
              component={Link}
              href='/'
                sx={{
                  textTransform: 'none',
                  color: '#898989',
                }}
              >
                Society
              </Box>

              <Box
              component={Link}
              href='/'
                sx={{
                  textTransform: 'none',
                  color: '#898989',
                }}
              >
                Feeds
              </Box>
            </Box>
          </Box>

          <Box
            component='img'
            src='/assets/images/FaceLogo.png'
            sx={{
              width: '36px',
              height: '36px',
            }}
          />
        </Box>

        <Divider
          sx={{
            border: '1px solid #222234',
            orientation: 'horizontal',
          }}
        />
      </Box>
    </Box>
  );
}
