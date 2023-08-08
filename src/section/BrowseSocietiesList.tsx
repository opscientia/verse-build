/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { AccountCircle } from '@mui/icons-material';
import {
  Button,
  InputAdornment,
  TextField,
  Box,
  Typography,
  BoxProps,
} from '@mui/material';

import BrowseCards from '@/components/ImgCard';
import BrowseSocietiesModal from '@/components/modals/BrowseSocieties';
import Congratulation from '@/components/modals/Congratulation';
import StaticProgressBar from '@/components/StaticProgressBar';
import PublicProfile from '@/components/modals/PublicProfile';
import { useDispatch } from 'react-redux';

const CARDS_LIST = [
  {
    id: 1,
    title: 'OpSci Society',
    imgSrc: '/assets/images/verseModal.png',
  },
];

export default function BrowseSocietiesList() {
  const [open, setOpen] = React.useState(false);
  const dispatch =  useDispatch()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openCongratulation, setOpenCongratulation] = React.useState(false);
  const handleOpenCongratulation = () => setOpenCongratulation(true);
  const handleCloseCongratulation = () => setOpenCongratulation(false);

  return (
    <Box
      sx={{
        background:
          'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <StaticProgressBar value={90} />

      <Box
        sx={{
          background: ' linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
          border: '1px solid rgba(253, 160, 255, 0.1)',
          maxWidth: 832,
          width: '100%',
          borderRadius: '12px',
          overflowY: 'auto',
          color: '#fff',
          maxHeight: 786,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 154,
            zIndex: 2,
            background:
              'linear-gradient(180deg, #28243E 41.15%, rgba(38, 35, 60, 0.2) 72.09%, rgba(38, 35, 60, 0) 100%);',
            // mixBlendMode: 'darken',
          }}
        >
          <Box
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 3,
              pb: 0,
              display: 'grid',

              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              },
              '& p': {
                fontSize: '24px',
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#fff',
                }}
              >
                Join Societies
              </Typography>
            </Box>

            <TextField
              sx={{
                '& input': {
                  color: '#fff !important',
                  width: '100%',
                  background: 'rgba(7, 10, 27, 0.15)',
                },
                '& label': {
                  color: '#fff',
                  alignItems: 'center',
                  display: 'flex',
                },
                '& label.Mui-focused': {
                  color: 'white',
                  borderBottomColor: '#fff',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#fff',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px',

                  '& fieldset': {
                    borderColor: '#393B50',
                  },
                  '&:hover fieldset': {
                    borderColor: '#393B50',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#393B50',
                  },
                },
                mt: {
                  xs: 2,
                  sm: 0,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Box component='img' src='/assets/svg/graySearch.svg' />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Box component='img' src='/assets/svg/menuLine.svg' />
                  </InputAdornment>
                ),
              }}
              placeholder='Search'
              fullWidth
              color='success'
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2,1fr)',
              sm: 'repeat(3,1fr)',
              md: 'repeat(4,1fr)',
            },
            mt: {
              xs: 20,
              sm: 12,
            },
            width: '100%',
            gap: '20px',
            maxHeight: 660,
            px: 3,
            position: 'relative',
            overflow: 'auto',
            '::-webkit-scrollbar': {
              width: '0',
            },

            '::-webkit-scrollbar-track': {
              width: 0,
            },

            '::-webkit-scrollbar-thumb': {
              width: 0,
            },
          }}
        >
          {[...CARDS_LIST, ...Array(50)].map((item, idx) => {
            return (
              <Box
                key={idx}
                onClick={() => {
                  if (idx === 0) {
                    handleOpen();
                  } else {
                    handleOpenCongratulation();
                  }
                }}
                // @ts-ignore
                sx={{
                  cursor: idx === 0 && 'pointer',
                }}
              >
                <BrowseCards
                  imgUrl={item?.imgSrc || '/assets/svg/question.svg'}
                  title={item?.title}
                />
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              flexDirection: 'column',
              gap: '32px',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 0,
              left: 0,
              right: 0,
              height: 152,
              borderRadius: ' 0 0 12px 12px',
              background:
                'linear-gradient(180deg, #121222 20.1%, rgba(18, 18, 34, 0.2) 66.81%, rgba(18, 18, 34, 0) 100%)',
              mixBlendMode: 'darken',
              transform: 'rotate(-180deg)',
            }}
          >
            {/* <Button
              sx={{
                backgroundColor: 'transparent',
                border: '1px solid pink',
                color: 'pink',
                borderRadius: '10px',
                mt: 5,
              }}
            >
              Load More
            </Button> */}

            {/* <Box
              sx={{
                display: 'flex',
                background: 'linear-gradient(90.51deg, #373A83 0.37%, #3E4D81 50.01%, #975598 99.65%)',
                border: '1px solid rgba(253, 160, 255, 0.15)',
                borderRadius: '80px',
                alignItems: 'center',
                p: '12px',
                pl: 3,
                gap: '10px',
                '& p': {
                  fontSize: '20px',
                },
                mb: 4,
              }}
            >
              <Typography>Want to register your Society?</Typography>

              <Button
                sx={{
                  background: 'linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',
                  borderRadius: '48px',
                  padding: '16px 32px 16px 32px',
                  color: '#1B1D32',
                }}
              >
                Apply to List your Society
              </Button>
            </Box> */}
          </Box>

          <BrowseSocietiesModal handleClose={handleClose} open={open} />

          {/* <Congratulation
            handleClose={handleCloseCongratulation}
            open={openCongratulation}
          /> */}

          <PublicProfile
            handleClose={handleCloseCongratulation}
            open={openCongratulation}
          />
        </Box>
      </Box>
    </Box>
  );
}
