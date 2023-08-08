/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';

import { ArrowLeftRounded, CloseOutlined } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import GradientText from '../GradientText';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'linear-gradient(156.94deg, #28243E 0%, #121222 100%)',
  boxShadow: 24,
  borderRadius: 3,
  outline: 'none',
  border: 'none',
};

export default function PublicProfile({
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
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid #3B3351',
                p: 1.1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  p: 0.4,
                  borderRadius: 1,
                  bgcolor: '#2B2D47',
                }}
              >
                <Typography
                  sx={{
                    p: 1,
                    color: '#8C8A8A',
                  }}
                >
                  NFT
                </Typography>

                <Typography
                  sx={{
                    p: 1,
                    background: '#25213a',
                    borderRadius: '0 12px 12px 0',
                  }}
                >
                  0x2345..
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    color: '#8C8A8A',
                    p: 1,
                    borderRadius: 1,
                    bgcolor: '#2B2D47',
                    fontSize: 13,
                  }}
                >
                  verarubin.id.desci.eth
                </Typography>

                <IconButton
                  onClick={handleClose}
                  sx={{
                    color: '#8C8A8A',
                    p: 1.2,
                    borderRadius: 1,
                    bgcolor: '#2B2D47',
                    height: '100%',
                  }}
                >
                  <Box component='img' src='/assets/svg/clip.svg' />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
              }}
            >
              <Box>
                <Box component='img' src='/assets/images/FaceLogo.png' />
              </Box>

              <Box
                sx={{
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      ml: {
                        sm: 1.5,
                      },
                    }}
                  >
                    Vera Rubin
                  </Typography>

                  <Box component='img' src='/assets/images/CheckIcon.png' />
                </Box>

                <Box
                  sx={{
                    mt: 1,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    button: {},
                  }}
                >
                  <IconButton
                    sx={{
                      color: '#8C8A8A',
                      p: 1.2,
                      borderRadius: '12px',
                      bgcolor: '#2E4971',
                    }}
                  >
                    <Box component='img' src='/assets/images/vera.png' />
                  </IconButton>

                  <Button
                    variant='contained'
                    sx={{
                      background: 'rgba(253, 160, 255, 0.2)',
                      border: '2px solid #cb79cd',
                      px: 1.3,
                      borderRadius: '32px',
                    }}
                  >
                    <GradientText
                      title='Astronomy'
                      sx={{
                        fontSize: 12,
                      }}
                    />
                  </Button>

                  <Button
                    variant='contained'
                    sx={{
                      background: 'rgba(172, 220, 174, 0.2)',
                      color: '#ACDCAE',
                      border: '2px solid #ACDCAE',
                      fontSize: 12,
                      px: 1.3,
                      borderRadius: '32px',
                    }}
                  >
                    Legacy Scientist
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                p: 2,
                pt: 0,
              }}
            >
              <Typography
                id='modal-modal-title'
                variant='subtitle2'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                American Astronomer
              </Typography>

              <Typography
                id='modal-modal-description'
                variant='subtitle1'
                sx={{
                  mt: 1,
                  color: '#A3A3A3',
                  lineHeight: '15px',
                }}
              >
                Pioneered work on galaxy rotation rates. She uncovered the
                discrepancy between the predicted and observed angular motion of
                galaxies by studying galactic rotation curves. She was honored
                throughout her career for her work, receiving the Bruce Medal,
                the Gold Medal of the Royal Astronomical Society, and the
                National Medal of Science, among others
              </Typography>

              <Typography
                id='modal-modal-description'
                variant='subtitle1'
                sx={{
                  mt: 1.2,
                  color: '#A3A3A3',
                }}
              >
                Since: Jul 23, 1928
              </Typography>

              {/* start rows of content */}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#2A2C45',
                  padding: '10px 8px 10px 8px',
                  mt: 2,
                  borderRadius: '8px 8px 0px 0px',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle2'>Holonym </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      p: 0.7,
                      px: 1.5,
                      ml: 1,
                      borderRadius: 1.5,
                      bgcolor: '#363855',
                    }}
                  >
                    3
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      padding: '0',
                      display: 'flex',
                      width: 'fit-content',
                      borderRadius: '8px 8px',
                      gap: '5px',
                      alignItems: 'center',
                      border: '2px solid #474965',
                    }}
                  >
                    <Box
                      sx={{
                        color: '#8C8A8A',
                        backgroundColor: '#474965',
                        borderRadius: '8px 0px 0px 8px',
                        padding: '4px',
                        fontWeight: '10px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          borderRadius: '8px 0px 0px 8px',
                          alignItems: 'center',
                          gap: '5px',
                          color: 'white',
                        }}
                      >
                        <Box
                          component='img'
                          src='/assets/images/Holo.png'
                          sx={{
                            color: '#FFFFFF',
                            width: '21.81px',
                            height: '16px',
                          }}
                        />

                        <Typography
                          sx={{
                            fontStyle: 'italic',
                            fontSize: 12,
                          }}
                        >
                          HOLO
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        pr: 0.6,
                        color: '#C3C3C3',
                        fontSize: 12,
                      }}
                    >
                      0x234...
                    </Typography>
                  </Box>

                  <ChevronRightIcon />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#272739',
                  padding: '10px 8px 10px 8px',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle2'>Linked Accounts </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      p: 0.7,
                      px: 1.5,
                      ml: 1,
                      borderRadius: 1.5,
                      bgcolor: '#363855',
                    }}
                  >
                    4
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      padding: '0',
                      display: 'flex',
                      width: 'fit-content',
                      borderRadius: '8px 8px',
                      gap: '5px',
                      alignItems: 'center',
                      img: {
                        width: '20px',
                      },
                    }}
                  >
                    <Box component='img' src='/assets/images/Cmp9.png' />

                    <Box component='img' src='/assets/images/github.png' />

                    <Box component='img' src='/assets/images/Cmp11.png' />

                    <Box component='img' src='/assets/images/twitter1.png' />
                  </Box>

                  <ChevronRightIcon />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#2A2C45',
                  padding: '10px 8px 10px 8px',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle2'>Affiliation </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      p: 0.7,
                      px: 1.5,
                      ml: 1,
                      borderRadius: 1.5,
                      bgcolor: '#363855',
                    }}
                  >
                    3
                  </Typography>
                </Box>

                <ChevronRightIcon />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#272739',
                  padding: '10px 8px 10px 8px',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle2'>
                    Education and Qualifications{' '}
                  </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      p: 0.7,
                      px: 1.5,
                      ml: 1,
                      borderRadius: 1.5,
                      bgcolor: '#363855',
                    }}
                  >
                    2
                  </Typography>
                </Box>

                <ChevronRightIcon />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#2A2C45',
                  padding: '10px 8px 10px 8px',
                  alignItems: 'center',
                  borderRadius:'0px 0px 8px 8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='subtitle2'>Works </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      p: 0.7,
                      px: 1.5,
                      ml: 1,
                      borderRadius: 1.5,
                      bgcolor: '#363855',
                    }}
                  >
                    3
                  </Typography>
                </Box>

                <ChevronRightIcon />
              </Box>

              {/* end holo */}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                  mt: 2,
                  div: {
                    border: '2px solid #24263E',
                    borderRadius: 1.5,
                    p: '18px',
                    width: '100%',
                    fontFamily: 'Inter',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 32,
                      fontWeight: 'bold',
                      color: '#CCCCCC',
                    }}
                  >
                    24
                  </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: '#A3A3A3',
                    }}
                  >
                    Verified Hypercerts
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 32,
                      fontWeight: 'bold',
                      color: '#CCCCCC',
                    }}
                  >
                    72
                  </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: '#A3A3A3',
                    }}
                  >
                    Impact <br />
                    Points
                  </Typography>
                </Box>
              </Box>

              <Button
                sx={{
                  width: '100%',
                  background: '#7C3771',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  p: 2,
                  mt: 2,
                }}
              >
                Donate to Mint
              </Button>
            </Box>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
