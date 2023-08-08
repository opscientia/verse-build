/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';

import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';

import SliderCard from '../components/SliderCard';

const SEARCH_FILTER = [
  {
    title: 'People',
    icon: '/assets/svg/people.svg',
  },
  {
    title: 'Societies',
    icon: '/assets/svg/societies.svg',
  },
  {
    title: 'Hypercerts',
    icon: '/assets/svg/hypercerts.svg',
  }
];

export default function SearchSection() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 700,
          color: '#fff !important',

          '&.MuiContainer-root .MuiOutlinedInput-root': {
            borderRadius: 4,
            overflow: 'hidden',
            background: 'rgba(7, 10, 27, 0.3)',
            mt: {
              xs: 8,
              sm: 14,
              lg: 18,
              xl: 24,
            },
          },
          '& input': {
            color: '#fff',
            fontSize: 20,
            py: 0,
            px: 1,
            height: 48,
            '::placeholder': {
              color: '#E4D7E9',
            },
          },
          '& label': {
            color: '#fff',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            border: '1px solid rgba(227, 187, 241, 0.5)',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(227, 187, 241, 0.5)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(227, 187, 241, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(227, 187, 241, 0.5)',
            },
          },
        }}
      >
        <TextField
          type='text'
          placeholder='Search ...'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Box
                  component='img'
                  src='/assets/svg/search.svg'
                />
              </InputAdornment>
            ),
          }}
          sx={{
            // borderRadius: 4,
            fontSize: 20,
            borderRadius: 5,
          }}
        />

        <Typography
          sx={{
            fontSize: 12,
            color: '#E4D7E9',
            mt: 2,
          }}
        >
          You can search:
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            alignItems: 'center',
            mt: 3,
          }}
        >
          {SEARCH_FILTER.map((item, idx) => {
            return (
              <Box
                key={`SEARCH_FILTER__${item.title}__${idx}`}
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  textTransform: 'capitalize',
                  gap: '11px',
                  alignItems: 'center',
                  color: '#FDF5FF',
                }}
              >
                <IconButton
                  sx={{
                    p: 0,
                  }}
                >
                  <Box
                    component='img'
                    src={item.icon}
                  />
                </IconButton>

                <Typography>{item.title}</Typography>
              </Box>
            );
          })}
        </Box>
      </Container>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          justifyContent: 'center',
          mt: 12,
          gap:2,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {[1, 2, 3, 4].map((item, idx) => (
          <SliderCard key={`SEARCH_FILTER__${item}__${idx}`} />
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          justifyContent: 'center',
          mt: 2,
          gap:2,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {[1, 2, 3, 4, 5].map((item, idx) => (
          <SliderCard key={`SEARCH_FILTER__${item}__${idx}`} />
        ))}
      </Box>
    </Box>
  );
}
