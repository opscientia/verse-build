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
            height: '100vh',
            // background: '#eee1e124',
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
                // backgroundColor: '#24263E',
                background:'linear-gradient(156.94deg, #28243E 0%, #121222 100%)',
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
                {/* <PageGrid /> */}
                <ModalBox />

                <Button
                  onClick={() => {
                    // router.push('/userProfile');
                    handleClose();
                  }}
                  variant='outlined'
                  sx={{
                    mt:15,
                    backgroundColor: '#782DC7',
                    border: '1px solid rgba(142, 73, 228, 0.4)',
                    textTransform: 'none',
                    color: 'white',
                    width: '100%',
                    py: 1.4,
                    '&:hover': {
                      backgroundColor: '#782DC7',
                    },
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
