// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { useState } from 'react';

import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

import { colorGradients } from '@/components/Style';

export default function Navbar() {
  const router = useRouter();
  const account = useAccount();
  const { address, } = account;

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event: any) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Container
        maxWidth='lg'
        sx={{
          py: 2,
          borderBottom: '1px solid hsl(258deg 25% 90% / 33%)',
          px: {
            xs: 2,
            lg: 0,
          },
        }}
      >
        <Stack
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
            component='img'
            src='/assets/svg/logo.svg'
            alt='logo'
            sx={{
              width: 116,
            }}
          />

          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              justifyContent: 'space-between',
              maxWidth: 220,
              width: '100%',
              alignItems: 'center',
              '& p': {
                fontWeight: 600,
              },
              '& a': {
                fontWeight: 600,
                textDecoration: 'none',
                color: '#fff',
              },
            }}
          >
            {/* <Link href='/'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography>dApps </Typography>

                <KeyboardArrowDownIcon />
              </Box>
            </Link> */}
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <Typography>dApps </Typography>
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                ul: {
                  background: '#0c1232d6',
                  color:'#fff'
                },
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>

              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>

            <Link href='/'>Search</Link>

            <Link href='/'>Docs</Link>
          </Box>

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'grid',
              },
              // gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <Button
              onClick={() => router.push('/signIn')}
              sx={{
                background: 'transparent',
              }}
            >
              <GradientText
                title='Sign In'
                gradient='linear-gradient(89.94deg, #FEC6C6 -29.79%, #FDA0FF 101.25%)'
              />
            </Button> */}

            {/* {account?.address ? (
              <Button
                sx={{
                  background: colorGradients.newBackgroundGradients,
                  color: (theme) => theme.palette.primary.dark,
                  fontSize: 16,
                  fontWeight: 500,
                  borderRadius: '8px',
                  height: 32,
                  px: 1.5,
                  color: '#fff',
                  '&:hover': {
                    background: colorGradients.newBackgroundGradients,
                  },
                }}
                // onClick={() => isDisconnected()}
                >
                {account?.address}
              </Button>
            ) : (
              
            )} */}
            <Button
              onClick={() => router.push('/signIn')}
              sx={{
                background: colorGradients.newBackgroundGradients,
                // color: (theme) => theme.palette.primary.dark,
                fontSize: 16,
                fontWeight: 500,
                borderRadius: '8px',
                height: 32,
                px: 1.5,
                color: '#fff',
                '&:hover': {
                  background: colorGradients.newBackgroundGradients,
                },
              }}
            >
              Sign In
              {/* {address ? address :'Sign In'}  */}
            </Button>

            {/* <WalletConnectBtn
              titleConnect='Sign In'
              // onClick={() => (address ? router.push('/selectProfile') : router.push('/signIn'))}
              onClick={() => router.push('/signIn')}

              sx={{
                background: colorGradients.newBackgroundGradients,
                color: (theme) => theme.palette.primary.dark,
                fontSize: 16,
                fontWeight: 500,
                borderRadius: '8px',
                height: 32,
                p: 1,
                color: '#fff',
                '&:hover': {
                  background: colorGradients.newBackgroundGradients,
                },
                // p: 0,
                m: 0,
              }}
            /> */}
          </Box>

          {/* <IconButton
            sx={{
              color: '#fff',
              display: {
                xs: 'block',
                md: 'none',
              },
            }}>
            <Menu />
          </IconButton> */}
        </Stack>
      </Container>
    </Box>
  );
}
