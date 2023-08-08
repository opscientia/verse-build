import * as React from 'react';

import { CloseOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'linear-gradient(156.94deg, #28243E 0%, #121222 100%)',
  boxShadow: 24,
  borderRadius: 1.5,
  p: 3,
  outline: 'none',
  border: 'none',
  textAlign: 'center',
};

export default function Congratulation({
  handleClose,
  open,
}: {
  handleClose: () => void;
  open: boolean;
}) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div>
          <Box
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              height: '100vh',
              overflow: 'hidden',
              background:
                'linear-gradient(351.79deg, rgba(36, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
            }}
          />

          <Box sx={style}>
            <Box
              sx={{
                width: '100%',
                textAlign: 'right',
              }}
            >
              <IconButton onClick={handleClose}>
                <CloseOutlined />
              </IconButton>
            </Box>

            <Typography id='modal-modal-title' variant='h4'>
              Congratulations!
            </Typography>

            <Typography
              id='modal-modal-description'
              sx={{
                mt: 2,
              }}
            >
              Your Academic Persona Has been Recorded
            </Typography>

            <Typography
              id='modal-modal-description'
              sx={{
                mt: 2,
                textAlign: 'center',
                color: '#AEAEAE',
              }}
            >
              blah blah blah
            </Typography>

            <Box
              component='img'
              src='/assets/images/congratulation.png'
              sx={{
                width: '100%',
                mt: 6,
              }}
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                mt: 2,
                div: {
                  background: '#24263E',
                  borderRadius: 1.5,
                  border: 'none',
                  outline: 'none',
                  p: '18px',
                  width: '100%',
                  fontFamily: 'Inter',
                },
              }}
            >
              <Box>
                <Box component='img' src='/assets/svg/UserIcon.svg' />

                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  My Identity
                </Typography>
              </Box>

              <Box>
                <Box component='img' src='/assets/svg/society.svg' />

                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  My Societies
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
