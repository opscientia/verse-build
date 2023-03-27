import React, { useState, useEffect } from 'react';

import { Box, TextField, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

import NewTwoButtons from '@/components/NewTwoButtons';
import PageGradient from '@/components/PageGradient';
import UploadFile from '@/components/UploadFile';

export default function UploadProfile() {
  const router = useRouter();

  // const [selectedFile, setSelectedFile] = useState();
  // const [preview, setPreview] = useState();

  // console.log({selectedFile, preview})

  // // create a preview as a side effect, whenever selected file is changed
  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined);

  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);

  //   setPreview({
  //     objectUrl,
  //   });

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  // const onSelectFile = (e: any) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);

  //     return;
  //   }

  //   // I've kept this example simple by using the first image instead of multiple
  //   setSelectedFile(e.target.files[0]);
  // };

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

            <Box
              component='div'
              sx={{
                backgroundColor: '#393B50',
                padding: '12px 16px 12px 12px',
                borderRadius: '12px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                mt: 2,
                '& p': {
                  color: '#CCCCCC',
                  fontSize: '14px',
                },
              }}
            >
              <Box
                component='img'
                src='/assets/images/smileface.png'
              />

              <Typography>Use avatar</Typography>
            </Box>
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
        onClick2={() => router.push('/about')}
      />
    </PageGradient>
  );
}
