import React from 'react';

import { Box, Button, Modal, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import ModalBox from '@/components/ModalBox';

interface IProps {
  handleClose: () => void;
  open: boolean;
}

export default function BrowseSocietiesModal({ handleClose, open, }: IProps) {
  const router = useRouter();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>
        <Box
          sx={{
            // background: 'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
            height: '100vh',
            background:'#eee1e124',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            px: 3,
          }}
        >
          <Box>
            <Box
              sx={{
                textAlign: 'center',
                overflow: 'hidden',
                backgroundColor: '#24263E',
                borderRadius: '15px',
                px: {
                  xs: 1.5,
                  sm: 3,
                },
                py: 3,
                maxWidth: 390,
                justifyContent: 'space-around',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  textAlign: 'left',
                  gap: '20px',
                  alignItems: 'center',
                }}
              >
                <Box
                  component='img'
                  src='/assets/images/verseModal.png'
                  alt=''
                />

                <Box>
                  <Typography>OpSci Society</Typography>

                  <Typography
                    sx={{
                      color: '#E3BBF1',
                    }}
                  >
                    @opsci #openscience
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    textAlign: 'left',
                    mt: 3,
                  }}
                >
                  Web-native community of scientist, building public goods to streamline research and innovation.
                </Typography>
              </Box>

              <Box>
                <Box>
                  <Typography
                    color='#FDA0FF'
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      mt: 3,
                    }}
                  >
                    <u>Society page</u>

                    <Box
                      component='img'
                      src='/assets/images/arrowUp.png'
                      alt='img'
                      sx={{
                        width: '8px',
                        height: '8px',
                      }}
                    />
                  </Typography>
                </Box>

                {/* <PageGrid /> */}
                <ModalBox />

                <Button
                  onClick={() => {
                    // router.push('/userProfile');
                    handleClose()
                  }}
                  sx={{
                    background: ' linear-gradient(98.39deg, #F8D1D1 0%, #FDA0FF 100%)',
                    maxWidth: 162,
                    width: '100%',
                    color: '#1B1D32',
                    p: 2,
                    mt: 6,
                    borderRadius: 2,
                    fontSize: 16,
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}